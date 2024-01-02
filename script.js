let expression = '';
function appendValue(value) {
  expression += value;
  document.getElementById('display').value = expression;
}
function clearDisplay() {
  expression = '';
  document.getElementById('display').value = expression;
}
function calculateResult() {
  try {
    const result = eval(expression);
    console.log(result)
    expression = result.toString();
    document.getElementById('display').value = expression;
  } catch (error) {
    expression = '';
    document.getElementById('display').value = 'Error';
  }
}