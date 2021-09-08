//EXERCISE 9
//a. From your BMI app, generate JSON with the following format:
// {
//   nama:
//   height:
//   weight:
//   bmiValue:
//   bmiStatus:
// }

//b. Show the result with console.log

var arr = [
  {
    //index [0]
    nama: "Deni",
    height: 1.55,
    weight: 55,
  },
  {
    //index[1]
    nama: "MyMother",
    height: 1.52,
    weight: 52,
  },
  {
    //index[2]
    nama: "MyFather",
    height: 1.57,
    weight: 57,
  },
];
//a=weight; b=height
//1.rumus pertama
function hitungBmi(weight, height) {
  return weight / (height * height);
}

hitungBmi();

//2.rumus kedua
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
//3.rumus ketiga iterasi for...of, terkoneksi 'memanfaatkan' dua function tersebut diatas
for (m of arr) {
  let hitung = hitungBmi(m.weight, m.height).toFixed(2); //masuk ke function pertama
  m.bmiValues = hitung;
  m.bmiStatus = checkBmi(hitung); //menjalankan function kedua dengan menggunakan parameter dari nilai variabel 'hitung' didalam for...of; kemudian membuat pasangan key dan value baru.
}
//for...of juga bisa buat iterasi untuk penulisan pasangan 'key' dan 'value' baru. 'push' data baru. EDIT data yang sudah ada
console.log(JSON.stringify(arr));

//MEMBUAT OBJECT BARU, ini digunakan jika kita ingin object yang lama/asli tidak berubah menggunakan '.push()'

var arr1 = [
  {
    //index [0]
    nama: "Deni",
    height: 1.55,
    weight: 55,
  },
  {
    //index[1]
    nama: "MyMother",
    height: 1.52,
    weight: 52,
  },
  {
    //index[2]
    nama: "MyFather",
    height: 1.57,
    weight: 57,
  },
];

let arr2 = [];

for (m of arr1) {
  let hitung = hitungBmi(m.weight, m.height).toFixed(2);
  let check = checkBmi(hitung);

  arr2.push({
    nama: m.nama,
    tinggi: m.height,
    berat: m.weight,
    hasil: hitung,
    status: check,
  });
}

console.log(arr2);
