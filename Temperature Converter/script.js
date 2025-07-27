// celsius to f =>  °F = (°C x 1.8) + 32 
// celsius to k =>   K = °C + 273.15


const celsiusInput = document.getElementById('celsius');
const faherenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

celsiusInput.addEventListener('input', function() {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        faherenheitInput.value = (celsius * 1.8 + 32).toFixed(2);
        kelvinInput.value = (celsius + 273.32).toFixed(2);
    } else {
        faherenheitInput.value = '';
        kelvinInput.value = '';
    }
})