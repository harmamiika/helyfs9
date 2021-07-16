interface exerciseCalcResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const target = parseInt(process.argv[2]);

const exerciseHoursList = process.argv
  .slice(3, process.argv.length - 1)
  .map((c) => parseInt(c));

console.log(target, 'target');
console.log(exerciseHoursList, 'list');

if (process.argv.length < 3) {
  console.log('Not enough arguments from the command line!');
}

export const calculateExercises = (
  exerciseHoursList: number[],
  target: number
): exerciseCalcResult | null => {
  if (!exerciseHoursList || !target) {
    return null;
  }

  const periodLength = exerciseHoursList.length;

  const trainingDays = exerciseHoursList.reduce((total, currentValue) => {
    if (currentValue > 0) {
      return total + 1;
    } else {
      return total;
    }
  });

  const success = trainingDays >= target ? true : false;

  let rating: number;
  let ratingDescription: string;
  if (trainingDays >= target) {
    rating = 3;
    ratingDescription = 'Good job!';
  } else if (trainingDays >= target / 2) {
    rating = 2;
    ratingDescription = 'Not bad but could be better!';
  } else {
    rating = 1;
    ratingDescription = 'Cmon man...';
  }

  const average =
    exerciseHoursList.reduce((total, current) => total + current) /
    exerciseHoursList.length;

  const summaryObject = {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };

  return summaryObject;
};

const result = calculateExercises(exerciseHoursList, target);
console.log(result);
