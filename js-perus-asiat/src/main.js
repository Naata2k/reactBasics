function checkAge() {
  let age = document.getElementById("age").value;
  let result = document.getElementById("answer");

  if (age < 1 || age > 100) {
    result.innerHTML = "Laita ikä 1-100 välillä";
  } else if (age >= 67) {
    result.innerHTML = "Olet eläkeikäinen";
  } else if (age >= 18 && age < 67) {
    result.innerHTML = "Olet täysi-ikäinen";
  } else {
    result.innerHTML = "Olet alaikäinen";
  }
}

function checkPaino() {
  for (let i = 1; i <= 8; i++) {
    document.getElementById(i.toString()).style.color = "black";
  }

  let indeksi = "";
  let paino = document.getElementById("paino").value;
  let pituus = document.getElementById("pituus").value;
  let vastaus = document.getElementById("vastaus");
  const painoIndeksi = (paino * 1.3) / (pituus / 100) ** 2.5;

  if (painoIndeksi >= 0 && painoIndeksi <= 14.9) {
    indeksi = "sairaalloinen alipaino";
    document.getElementById("1").style.color = "red";
  } else if (painoIndeksi >= 15 && painoIndeksi < 18) {
    indeksi = "merkitävä alipaino";
    document.getElementById("2").style.color = "red";
  } else if (painoIndeksi >= 18 && painoIndeksi <= 18.9) {
    indeksi = "lievä alipaino";
    document.getElementById("3").style.color = "red";
  } else if (painoIndeksi >= 19 && painoIndeksi < 25) {
    indeksi = "normaali paino";
    document.getElementById("4").style.color = "red";
  } else if (painoIndeksi >= 25 && painoIndeksi < 30) {
    indeksi = "lievä ylipaino";
    document.getElementById("5").style.color = "red";
  } else if (painoIndeksi >= 30 && painoIndeksi < 35) {
    indeksi = "merkittävä ylipaino";
    document.getElementById("6").style.color = "red";
  } else if (painoIndeksi >= 35 && painoIndeksi < 40) {
    indeksi = "vaikea ylipaino";
    document.getElementById("7").style.color = "red";
  } else {
    indeksi = "sairaalloinen ylipaino";
    document.getElementById("8").style.color = "red";
  }

  vastaus.innerHTML =
    "painoindeksisi on " +
    painoIndeksi.toFixed(1) +
    " eli sinulla on " +
    indeksi;
}
