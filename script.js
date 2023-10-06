function calBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Perhitungan BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Menampilkan Hasil
    var result = document.getElementById("result");
    result.innerHTML = "Your BMI is : " + bmi.toFixed(2);

    if (bmi < 18.5) {
        result.innerHTML += " which means you are <strong> Under weight</strong>";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerHTML += " which means you are<strong> Normal</strong>";
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerHTML += " which means you are<strong> Over weight</strong>";
    } else {
        result.innerHTML += " which means you are <strong> Obesity</strong>";
    }
}
