//EXERCISE 10
//a. Create an express app
//b. Create a GET/profile API that returns a JSON containing your name, height and weight
//Sample Response:
// {
//     "name":"Ilham"
//     "height":1.7,
//     "weight":65
// }

const express = require("express");

const app = express();
const port = 3000;

app.get("/profile", (req, res) => {
  const profile = [{ name: "Denibudi", height: 1.55, weight: 55 }];

  res.json(profile);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
