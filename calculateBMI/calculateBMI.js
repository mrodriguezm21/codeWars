function bmi(weight, height) {
  let bmiV = weight / height ** 2;
  if (bmiV <= 18.5) {
    return "Underweight";
  } else if (bmiV <= 25.0) {
    return "Normal";
  } else if (bmiV <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}


bmi(80, 1.80);