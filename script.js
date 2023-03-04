function convert() {
    let temp = parseFloat(document.getElementById("temp").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = document.getElementById("result");

    if (from == "Celsius") {
        if (to == "Fahrenheit") {
            result.innerHTML = (temp * 9 / 5 + 32).toFixed(2) + " °F";
        } else if (to == "Kelvin") {
            result.innerHTML = (temp + 273.15).toFixed(2) + " K";
        } else {
            result.innerHTML = temp.toFixed(2) + " °C";
        }
    } else if (from == "Fahrenheit") {
        if (to == "Celsius") {
            result.innerHTML = ((temp - 32) * 5 / 9).toFixed(2) + " °C";
        } else if (to == "Kelvin") {
            result.innerHTML = ((temp - 32) * 5 / 9 + 273.15).toFixed(2) + " K";
        } else {
            result.innerHTML = temp.toFixed(2) + " °F";
        }
    } else {
        if (to == "Celsius") {
            result.innerHTML = (temp - 273.15).toFixed(2) + " °C";
        } else if (to == "Fahrenheit") {
            result.innerHTML = ((temp - 273.15) * 9 / 5 + 32).toFixed(2) + " °F";
        } else {
            result.innerHTML = temp.toFixed(2) + " K";
        }
    }
}
