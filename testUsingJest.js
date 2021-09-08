//EXERCISE 14
//a. You have two function:BMI calculation and BMI categorization.
//b. Create a test for both function
//c.Test data:

//height    weight  bmi     category
//170       50      17.3    underweight
//170       60      20.8    normal
//170       75      26.0    overweight
//170       90      31.1    obese

//functionnya ada dua?
//First function bmiCalculation
//a=weight b=height
function hitungBmi(a, b) {
  return (a / (b * b)).toFixed(1); //toFixed() me-return nilai dengan type data "string"
}

//Second function bmiCategory
function checkBmi(bmi) {
  if (bmi < 18.5) {
    return "Berat badan kurang";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Berat badan normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Kelebihan berat badan";
  } else {
    return "Kegemukan";
  }
}

module.exports = { hitungBmi, checkBmi }; //agar function tsb bisa dijalankan(test) di file lain
//jalankan dengan 'npm run test' pada terminal
