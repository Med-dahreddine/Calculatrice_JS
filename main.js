// // DOM
// const touches = [...document.querySelectorAll(".bouton")];
// const ecran = document.querySelector(".ecran");
// const listKeycode = touches.map((touche) => touche.dataset.key);
// const listOperators = touches.map((operat) => operat.dataset.operator);
// document.addEventListener("click", (e) => {
//   const valeur = e.target.dataset.operator; //  string because data-key=""
//   console.log(valeur, typeof valeur);
//   // calculer(valeur);
// });

// document.addEventListener("click", (e) => {
//   const valeur = e.target.dataset.key;
//   // console.log(valeur, typeof valeur);
//   // calculer(valeur);
// });

// const addition = (operand1, operand2) => operand1 + operand2;
// const subtraction = (operand1, operand2) => operand1 - operand2;
// const multiplication = (operand1, operand2) => operand1 * operand2;
// const division = (operand1, operand2) => operand1 / operand2;

// function operate(operand1, operator, operand2) {
//   switch (operator) {
//     case "/":
//       division(operand1, operand2);
//       break;
//     case "*":
//       multiplication(operand1, operand2);
//       break;
//     case "+":
//       addition(operand1, operand2);
//       break;
//     case "-":
//       subtraction(operand1, operand2);
//       break;
//     default:
//       break;
//   }
// }

// // clculer() pour vérifier si on a clicker sur une touche ou autre chose
// const calculer = (valeur) => {
//   if (listKeycode.includes(valeur)) {
//     // wach kayna fhadb listKeycode ola la
//     // console.log(listKeycode);
//     switch (valeur) {
//       case "8":
//         ecran.textContent = "";
//         break;
//       case "13":
//         break;
//       default:
//         //la valeur du touche affiche dans l'écran
//         const indexKeycode = listKeycode.indexOf(valeur); // on veut l'index du keycode
//         const touche = touches[indexKeycode];
//         ecran.textContent += touche.innerHTML;
//         break;
//     }
//   }
// };
const currentOperatorDisplay = document.querySelector(".currentOperator");
const storedOperatorDisplay = document.querySelector(".storedOperator");
let firstOperand = null;
let secondOperand = null;
let operator = null;
let storedResult = null;
let result = null;

console.log(currentOperatorDisplay.textContent);
// === Basic operations functions ===
function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

// === Function responsible for resolving the operation ===
function operate(operation, number1, number2) {
  let opResult = 0;

  number1 = Number(number1);
  number2 = Number(number2);

  switch (operation) {
    case "+":
      opResult = add(number1, number2);
      break;

    case "-":
      opResult = subtract(number1, number2);
      break;

    case "*":
      opResult = multiply(number1, number2);
      break;

    case "/":
      opResult = divide(number1, number2);
      break;
  }

  return opResult;
}

// === Function for displaying number and storing on variable===
function displayNumber(num) {
  currentOperatorDisplay.textContent += num;
  secondOperand = currentOperatorDisplay.textContent;
}

// === Function that will be called when a operation signal is clicked
function operatorCall(operationSignal) {
  // prevOperator = operator;
  // operator = operationSignal;

  // Checks if there is no previous number waiting for operation
  if (storedOperatorDisplay.textContent == "" && firstOperand == null) {
    firstOperand = secondOperand;
    storedOperatorDisplay.textContent = firstOperand;
    currentOperatorDisplay.textContent = "";
    operator = operationSignal;
  } else if (firstOperand != null && secondOperand != null) {
    if (operator == "/" && secondOperand == 0) {
      byZero();
    } else {
      storedResult = operate(operator, firstOperand, secondOperand);
      storedOperatorDisplay.textContent = storedResult;
      firstOperand = storedResult;

      operator = operationSignal;

      currentOperatorDisplay.textContent = "";
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
    currentOperatorDisplay.textContent != ""
  ) {
    if (operator == "/" && secondOperand == 0) {
      byZero();
    } else {
      result = operate(operator, firstOperand, secondOperand);

      storedOperatorDisplay.textContent = "";
      currentOperatorDisplay.textContent = result;
      firstOperand = result;
    }
  }
}

// Function to clear all variables and the display
function reset() {
  firstOperand = null;
  secondOperand = null;
  operator = null;
  result = null;
  storedOperatorDisplay.textContent = "";
  currentOperatorDisplay.textContent = "";
}

// Function to get executed when the operation will divide by zero.
function byZero() {
  alert("You can't divide by Zero, the page will be reloaded. Try again.");
  window.location.reload();
}

// Function called when dot button is clicked, it will allow only one dot per number
function dotFunc() {
  var dotCheck = currentOperatorDisplay.textContent;
  console.log(typeof dotCheck);
  if (!dotCheck.includes(".")) {
    currentOperatorDisplay.textContent += ".";
  }
}

// Backspace button
function deleteLast() {
  if (currentOperatorDisplay.textContent != "") {
    var str = currentOperatorDisplay.textContent;
    currentOperatorDisplay.textContent = str.substring(0, str.length - 1);
    secondOperand = currentOperatorDisplay.textContent;
  }
}
