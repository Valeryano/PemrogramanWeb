let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        // Mengganti '^' dengan '**' untuk pangkat
        displayValue = displayValue.replace('^', '**');
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function deleteCharacter() {
    displayValue = displayValue.slice(0, -1); // Menghapus karakter terakhir
    document.getElementById('display').value = displayValue;
}

