/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function generarExcusa() {
  // Seleccionamos un elemento aleatorio de cada arreglo
  let whoRandom = who[Math.floor(Math.random() * who.length)];
  let actionRandom = action[Math.floor(Math.random() * action.length)];
  let whatRandom = what[Math.floor(Math.random() * what.length)];
  let whenRandom = when[Math.floor(Math.random() * when.length)];

  // Concatenamos los elementos para formar la excusa
  let excuse = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}.`;

  // Devolvemos la excusa
  return excuse;
}

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = generarExcusa();
};
