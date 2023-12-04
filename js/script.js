document.addEventListener('DOMContentLoaded', function() {
  const formLuas = document.getElementById('form-luas-segitiga');
  const formKeliling = document.getElementById('form-keliling-segitiga');
  const hasil = document.getElementById('hasil');
  const rumus = document.getElementById('rumus');
  const hasil2 = document.getElementById('hasil2');
  const rumus2 = document.getElementById('rumus2');

  function hitungLuasSegitiga() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if ((alas) && (tinggi)) {
      const luas = (alas * tinggi) / 2;
      rumus.textContent = `Hasil Dari: 0.5 ${alas} * ${tinggi}`;
      hasil.textContent = `Luas Segitiga: ${luas.toFixed()}`;
    } else {
      hasil.textContent = 'Masukkan angka yang valid untuk alas dan tinggi segitiga.';
    }
  }

  function hitungKelilingSegitiga() {
    const sisiA = parseFloat(document.getElementById('sisiA').value);
    const sisiB = parseFloat(document.getElementById('sisiB').value);
    const sisiC = parseFloat(document.getElementById('sisiC').value);

    if ((sisiA) && (sisiB) && (sisiC)) {
      const keliling = sisiA + sisiB + sisiC;

      rumus2.textContent = `Hasil Dari: ${sisiA} + ${sisiB} + ${sisiC} `;
      hasil2.textContent = `Keliling Segitiga: ${keliling.toFixed()}`;
    } else {
      hasil2.textContent = 'Masukkan angka yang valid untuk panjang sisi-sisi segitiga.';
    }
  }

  document.querySelector('.hitungLuas').addEventListener('click', function(event) {
    event.preventDefault();
    hitungLuasSegitiga();
  });

  document.querySelector('.hitungKeliling').addEventListener('click', function(event) {
    event.preventDefault();
    hitungKelilingSegitiga();
  });

  document.querySelector('.deleteluas').addEventListener('click', function(event) {
    event.preventDefault();
    const inputFields = document.querySelectorAll('input[type="number"]');
    inputFields.forEach(input => input.value = '');
    hasil.textContent = '';
    rumus.textContent = '';
  });
  document.querySelector('.deletekeliling').addEventListener('click', function(event) {
    event.preventDefault();
    const inputFields = document.querySelectorAll('input[type="number"]');
    inputFields.forEach(input => input.value = '');
    hasil2.textContent = '';
    rumus2.textContent = '';
  });
});
