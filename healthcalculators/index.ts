import express from 'express';
// yritä käyttää ensin importia
// requiren kautta tyypitystä ei löydy

import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;

  if (typeof height !== 'string' || typeof weight !== 'string') {
    return res.send('invalid parameters!');
  }

  const intHeight = parseInt(height);
  const intWeigth = parseInt(weight);

  const result = calculateBmi(intHeight, intWeigth);

  return res.json(result);
});

app.post('/exercises', (req, res) => {
  //   const { daily_exercises, target } = req.body;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const daily_exercises: number[] = req.body.daily_exercises;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const target: number = req.body.target;

  if (!daily_exercises || !target) {
    return res.json({ error: 'parameters missing' });
  }

  const checkedExercises: boolean = daily_exercises.every((num: number) =>
    isNaN(num)
  );
  if (!checkedExercises || isNaN(target)) {
    return res.json({ error: 'malformatted parameters' });
  }

  const reportObject = calculateExercises(daily_exercises, target);

  return res.json(reportObject);
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack');
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
