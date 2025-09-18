function hitungKonversiSuhu() {
  const nilaiInput = document.getElementById("nilaiSuhu");
  const satuanAwal = document.getElementById("awalSuhu");
  const satuanKonversi = document.getElementById("konversiSuhu");
  const hasilDiv = document.getElementById("hasil");

  if (!nilaiInput || !satuanAwal || !satuanKonversi) {
    alert("Form konversi suhu tidak lengkap!");
    return;
  }

  const nilai = parseFloat(nilaiInput.value);
  const dari = satuanAwal.value;
  const ke = satuanKonversi.value;

  if (isNaN(nilai)) {
    hasilDiv.innerHTML = "<span style='color:red'>Masukkan nilai suhu yang valid!</span>";
    return;
  }
  if (dari === ke) {
    hasilDiv.innerHTML = `<h3>Hasil Konversi</h3><p>${nilai} ${dari} = ${nilai} ${ke}</p>`;
    return;
  }

  let hasil;

  if (dari === "Celcius" && ke === "Fahrenheit") {
    hasil = (nilai * 9/5) + 32;
  } else if (dari === "Celcius" && ke === "Kelvin") {
    hasil = nilai + 273.15;
  } else if (dari === "Fahrenheit" && ke === "Celcius") {
    hasil = (nilai - 32) * 5/9;
  } else if (dari === "Fahrenheit" && ke === "Kelvin") {
    hasil = ((nilai - 32) * 5/9) + 273.15;
  } else if (dari === "Kelvin" && ke === "Celcius") {   
    hasil = nilai - 273.15;
  } else if (dari === "Kelvin" && ke === "Fahrenheit") {
    hasil = ((nilai - 273.15) * 9/5) + 32;
  }

  hasilDiv.innerHTML = `<h3>Hasil Konversi</h3><p>${nilai} ${dari} = ${hasil.toFixed(2)} ${ke}</p>`;
}