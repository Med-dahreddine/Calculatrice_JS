const actualOperatorDisplay = document.querySelector(".actualOperator");
const storedOperatorDisplay = document.querySelector(".storedOperator");
let firstOperand = null;
let secondOperand = null;
let operator = null;
let storedResult = null;
let result = null;

// === operations functions ===
function additionner(n1, n2) {
  return n1 + n2;
}

function soustraire(n1, n2) {
  return n1 - n2;
}

function multiplier(n1, n2) {
  return n1 * n2;
}

function diviser(n1, n2) {
  return n1 / n2;
}

//  Operate pour résoudre l'opération
function operate(operation, number1, number2) {
  let opResult = 0;

  number1 = Number(number1);
  number2 = Number(number2);

  switch (operation) {
    case "+":
      opResult = additionner(number1, number2);
      break;

    case "-":
      opResult = soustraire(number1, number2);
      break;

    case "*":
      opResult = multiplier(number1, number2);
      break;

    case "/":
      opResult = diviser(number1, number2);
      break;
  }

  return opResult;
}

// displayNumber pour storer un variable
function displayNumber(num) {
  actualOperatorDisplay.textContent += num;
  secondOperand = actualOperatorDisplay.textContent;
}

// === on appelle cette Fonction  lorsque l'utilisateur click sur un opérateur
function operatorCall(operationSignal) {
  // prevOperator = operator;
  // operator = operationSignal;

  // Checks if there is no previous number waiting for operation
  if (storedOperatorDisplay.textContent == "" && firstOperand == null) {
    firstOperand = secondOperand;
    storedOperatorDisplay.textContent = firstOperand;
    actualOperatorDisplay.textContent = "";
    operator = operationSignal;
  } else if (firstOperand != null && secondOperand != null) {
    if (operator == "/" && secondOperand == 0) {
      surZero();
    } else {
      storedResult = operate(operator, firstOperand, secondOperand);
      storedOperatorDisplay.textContent = storedResult;
      firstOperand = storedResult;

      operator = operationSignal;

      actualOperatorDisplay.textContent = "";
      secondOperand = null;
    }
  }
}

// Function to control equal sign, it also leave variable ready for other operation
function equals(operator, firstOperand, secondOperand) {
  if (
    firstOperand != null &&
    secondOperand != null &&
    operator != null &&
    actualOperatorDisplay.textContent != ""
  ) {
    if (operator == "/" && secondOperand == 0) {
      surZero();
    } else {
      result = operate(operator, firstOperand, secondOperand);

      storedOperatorDisplay.textContent = "";
      actualOperatorDisplay.textContent = result;
      firstOperand = result;
    }
  }
}

// Function to clear all variables and the display
function supprimer() {
  firstOperand = null;
  secondOperand = null;
  operator = null;
  result = null;
  storedOperatorDisplay.textContent = "";
  actualOperatorDisplay.textContent = "";
}

function surZero() {
  alert("Interdit de diviser sur 0");
  window.location.reload();
}

// Function called when dot button is clicked, it will allow only one dot per number
function dotFunc() {
  var dotCheck = actualOperatorDisplay.textContent;
  console.log(typeof dotCheck);
  if (!dotCheck.includes(".")) {
    actualOperatorDisplay.textContent += ".";
  }
}
