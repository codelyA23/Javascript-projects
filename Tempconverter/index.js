const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

submit.onclick = function() {
    let num = Number(document.getElementById('connvert').value);  // Get the input value

    if (celsius.checked && num !== null) {
        let converted = (num - 32) * (5/9);
        result.textContent = `${converted.toFixed(2)} °C`;
    } 
    else if (fahrenheit.checked && num !== null) {
        let converted = (num * (9/5)) + 32;
        result.textContent = `${converted.toFixed(2)} °F`;
    } 
    else {
        result.textContent = "Please select a conversion option! or Enter a number to convert";
    }
}

