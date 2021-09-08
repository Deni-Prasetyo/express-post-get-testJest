//Perbedaan HTTP Method:
//GET:umumnya untuk mengambil data. g bisa punya request body
//POST:umumnya untuk menulis data. bisa punya request body

//POST Request with JSON Body
const express = require("express");

const app = express();
app.use(express.json()); //ada tambahan ini
const port = 3001;

function hitungBmi(a, b) {
  return a / (b * b);
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

app.post("/bmi", (req, res) => {
  //http method POST
  const name = req.body.name; //ambil data dari body
  const weight = req.body.weight;
  const height = req.body.height;

  let hasilBmi = hitungBmi(weight, height).toFixed(2);
  let statusBmi = checkBmi(hasilBmi);

  let profile = {
    name: req.body.name,
    weight: req.body.weight,
    height: req.body.height,
    bmi: hasilBmi,
    bmiCategory: statusBmi,
  };

  res.json(profile);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
