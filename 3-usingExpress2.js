//EXERCISE 11
//a. Create an express app
//b. Create GET/bmi API that:
//  -Calculates your BMI and category (using your previous BMI function)
//  -Returns a JSON constaining your name, height, weight, BMI, and BMI category

//Sample response:
// {
//     name:"Ilham",
//     height: 1.7,
//     weight: 65,
//     bmi: 22.5,
//     bmiCategory:"normal"
// }

const express = require("express");

const app = express();
const port = 3000;

app.get("/profile", (req, res) => {
  let profile = { nama: "Deni", height: 1.55, weight: 55, bmi: "", bmiCategory: "" };

  let bmi = (profile.weight / (profile.height * profile.height)).toFixed(2);

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

  profile.bmi = bmi;
  profile.bmiCategory = checkBmi(bmi);

  res.json(profile);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
