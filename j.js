function convert() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const inputNumber = document.getElementById('inputNumber').value;
    let result;

    if (from === 'decimal') {
        if (to === 'binary') {
            result = parseInt(inputNumber, 10).toString(2);
        } else if (to === 'octal') {
            result = parseInt(inputNumber, 10).toString(8);
        } else if (to === 'hexadecimal') {
            result = parseInt(inputNumber, 10).toString(16);
        } else {
            result = inputNumber;
        }
    } else if (from === 'binary') {
        if (to === 'decimal') {
            result = parseInt(inputNumber, 2).toString(10);
        } else if (to === 'octal') {
            result = parseInt(inputNumber, 2).toString(8);
        } else if (to === 'hexadecimal') {
            result = parseInt(inputNumber, 2).toString(16);
        } else {
            result = inputNumber;
        }
    } else if (from === 'octal') {
        if (to === 'decimal') {
            result = parseInt(inputNumber, 8).toString(10);
        } else if (to === 'binary') {
            result = parseInt(inputNumber, 8).toString(2);
        } else if (to === 'hexadecimal') {
            result = parseInt(inputNumber, 8).toString(16);
        } else {
            result = inputNumber;
        }
    } else if (from === 'hexadecimal') {
        if (to === 'decimal') {
            result = parseInt(inputNumber, 16).toString(10);
        } else if (to === 'binary') {
            result = parseInt(inputNumber, 16).toString(2);
        } else if (to === 'octal') {
            result = parseInt(inputNumber, 16).toString(8);
        } else {
            result = inputNumber;
        }
    }

    document.getElementById('result').innerText = ` ${result}`;
}
