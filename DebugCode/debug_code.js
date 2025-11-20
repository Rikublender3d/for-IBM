
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let operator = document.getElementById('operator').value;

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = calculate(num1, num2, operator);
        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function calculate(a, b, operator) {
    debugger; // ← 最初にどの演算が選ばれたか確認できる

    if (operator === 'mul') {
        return a * b;
    } else if (operator === 'add') {
        return a + b;
    } else if (operator === 'sub') {
        return a - b;
    } else if (operator === 'div') {
        return a / b;
    } else {
        return 'Invalid operator';
    }
}


function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
