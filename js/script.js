/* This is Javascript file */
function hitungBmi() {
    let berat = document.getElementById("input-berat").value
    let tinggi = document.getElementById("input-tinggi").value/100
    let hitungBmi = berat/(tinggi**2);
    console.log(hitungBmi);
    const hasil = document.getElementById('kesimpulan');
    const tekssaran = document.getElementById('saran');
    const hasilkategori = document.getElementById('tekskategori');

    let kategori = "";
    let note="";

    if (hitungBmi < 18.5) {
        kategori = "Berat Badan Kurang";
        note=`Kekurangan berat badan bisa meningkatkan risiko masalah kesehatan, 
        seperti kekurangan gizi dan penurunan sistem kekebalan tubuh. Cara menambah berat badan dapat
        dilakukan dengan mengatur pola makan, mengkonsumsi makanan yang menambah masa otot seperti proten 
        dan semacamnya, serta rutin berolahraga untuk melatih dan membentuk postur tubuh.`;

    } else if (hitungBmi >= 18.5 && hitungBmi <= 24.9) {
        kategori = "Normal (Ideal)";
        note=`Berat badan Anda berada dalam rentang yang sehat dan proporsional 
        dengan tinggi badan Anda. Meskipun BMI Anda normal, penting untuk tetap menjaga pola makan yang 
        seimbang, berolahraga secara teratur, dan menjaga gaya hidup sehat untuk mempertahankan kondisi 
        tubuh yang optimal.`;

    } else if (hitungBmi >= 25.0 && hitungBmi <= 29.9) {
        kategori = "Berat Badan Lebih";
        note=`Cara terbaik untuk menurunkan berat badan adalah dengan mengatur pola kalori makanan yang
        dikonsumsi dan berolahraga.`;

    } else {
        kategori = "Obesitas";
        note=`Obesitas dapat meningkatkan risiko berbagai penyakit serius, seperti penyakit jantung, 
        diabetes tipe 2, dan hipertensi.`;
    }

    document.getElementById("result-bmi").innerHTML = hitungBmi.toFixed(2);
    hasil.textContent = "Anda berada dalam kategori " + kategori;
    tekssaran.textContent=note;
    hasilkategori.textContent=kategori
    
    clearform();
}

function clearform(){
    document.getElementById("input-berat").value = "";
    document.getElementById("input-usia").value = "";
    document.getElementById("input-tinggi").value = "";
}

function resetBmi(){
    clearform();
    document.getElementById("result-bmi").innerHTML = 0;
}