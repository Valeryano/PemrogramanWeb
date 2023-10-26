function hitungPenjumlahan() {
  var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
  var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

  if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
    var sum = bilangan1 + bilangan2;
    alert("Hasil : " + sum);
  } else {
    alert("Bilangan Belum Terisi");
  }
}

function refresh() {
  document.getElementById("KalkulatorForm");
}
