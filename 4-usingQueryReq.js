//EXERCISE 12
//a. Create an express app
//b. Create a GET/bmi API that:
//  -Accepts query string: name, height, and width
//  -Calculates your BMI and category (using your previous BMI function)
//  -Return a JSON containing your name, height, weight, BMI, and BMI category

//Sample request:
//  /bmi?name=Ilham&height=170&weight=65

//Sample response:
// {
//     name:"Ilham",
//     height: 1.7,
//     weight: 65,
//     bmi: 22.5
//     bmiCategory: "normal"
// }
const express = require("express");

const app = express();
const port = 3000;

function hitungBmi(weight, height) {
  return weight / (height * height);
}

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

app.get("/bmi", (req, res) => {
  //   let profile = [];
  let name = req.query.name; //ambil data dari sisi user(request)
  let height = req.query.height;
  let weight = req.query.weight;

  let bmi = hitungBmi(weight, height).toFixed(2);
  let bmiCategory = checkBmi(bmi);

  res.json({
    nama: name,
    tinggi: height,
    berat: weight,
    bmi: bmi,
    bmiCategory: bmiCategory,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
