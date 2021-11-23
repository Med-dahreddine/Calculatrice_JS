// DOM
const touches = [...document.querySelectorAll(".bouton")];
const listKeycode = touches.map((touche) => touche.dataset.key);
document.addEventListener("keydown", ({ keyCode }) => console.log(keyCode));
