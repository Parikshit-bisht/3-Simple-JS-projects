
document.getElementById('calc').addEventListener('click', function(event) {
    event.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const result = document.querySelector('.result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please enter a valid height";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please enter a valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `BMI: ${bmi}`;
    }
});