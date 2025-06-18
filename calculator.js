// Arithmetic Functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

// Helper: Get input values
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Update result display
function displayResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event Listeners
document.getElementById('add').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    displayResult(add(n1, n2));
});

document.getElementById('subtract').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    displayResult(subtract(n1, n2));
});

document.getElementById('multiply').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    displayResult(multiply(n1, n2));
});

document.getElementById('divide').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    displayResult(divide(n1, n2));
});
