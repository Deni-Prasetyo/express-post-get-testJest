//Pengecekan dengan nilai ekspektasi yang sudah kita pastikan nilainya
const tgs14a = require("./testUsingJest"); //nama dalam require'module' adalah lokasi folder dari file yanga akan ditest

test("bmiA", () => {
  expect(tgs14a.hitungBmi(50, 1.7)).toEqual("17.3");
  expect(tgs14a.hitungBmi(60, 1.7)).toEqual("20.8");
  expect(tgs14a.hitungBmi(75, 1.7)).toEqual("26.0");
  expect(tgs14a.hitungBmi(90, 1.7)).toEqual("31.1");
});

const tgs14b = require("./testUsingJest"); //nama dalam require'module' adalah lokasi folder dari file yanga akan ditest

test("bmiB", () => {
  expect(tgs14b.checkBmi(50, 1.7)).toEqual("17.3");
  expect(tgs14b.checkBmi(60, 1.7)).toEqual("20.8");
  expect(tgs14b.checkBmi(75, 1.7)).toEqual("26.0");
  expect(tgs14b.checkBmi(90, 1.7)).toEqual("31.1");
});
