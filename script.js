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
  "Macan Eg",
  "Buaya Darat",
  "Macan Feng",
  "Harimau Lapet",
  "Cacing Got",
  "Banyak",
  "Nyi blorong",
  "Roro kidol",
  "Kapal karam",
  "Laba-laba Sunda",
  "Javier",
  "Rusdi",
  "Kak ros",
  "Opah",
  "Upin-ipin",
  "Boboiboy",
];

function checkKhodam() {
  setTimeout(() => {
    input.value = "";
  }, 100);
  if (input.value === "") {
    return;
  } else {
    const random = Math.floor(Math.random() * namaKhodam.length);
    khodam.innerHTML = namaKhodam[random];
    nama.innerHTML = input.value;
  }
}
