const khodam = document.getElementById("khodam");
let input = document.getElementById("input");
let nama = document.getElementById("nama");

const namaKhodam = [
  "umar",
  "Ular Kesleo",
  "Belalang Sumbut",
  "Macan Goreng",
  "Hiu Bernadya",
  "Gragal Goreng",
  "Bang Satrio",
  "Forza horizon",
  "Dewa Kodeng",
  "Dewa Rapz",
  "Kipas Angin",
  "Botol",
  "Minion",
];

function checkKhodam() {
  const random = Math.floor(Math.random() * namaKhodam.length);
  khodam.innerHTML = namaKhodam[random];
  nama.innerHTML = input.value;
}
