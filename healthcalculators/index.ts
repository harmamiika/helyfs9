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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    return res.json({ error: 'parameters missing' });
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
