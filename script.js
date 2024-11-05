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
  "Macan pemarah",
  "Buaya sunda",
  "Beruang sunda",
  "Harimau birahi",
  "Tutup odol",
  "Tutup panci",
  "Kaleng kejepit",
  "Kanebo kering",
  "Kapal karam",
  "Gergaji mesin",
  "Nyi blorong",
  "Jin rawa rontek",
  "Kucing Israel",
  "Capung gila",
  "Tumis kangkung",
  "Jam Rusak",
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
