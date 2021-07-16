export const calculateBmi = (
  heightInCm: number,
  weightInKg: number
): string => {
  const bmi = weightInKg / (heightInCm / 100) ** 2;

  let weightClass: string;
  if (bmi < 18.5) {
    weightClass = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    weightClass = 'Normal (healthy weight)';
  } else if (bmi >= 25 && bmi < 30) {
    weightClass = 'Overweight';
  } else {
    weightClass = 'Obese';
  }

  return weightClass;
};

const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);

if (height && weight) {
  const result = calculateBmi(height, weight);
  console.log(result);
} else {
  console.log('invalid arguments');
}
