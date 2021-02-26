/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pinta = ["\u2666", "\u2665", "\u2660", "\u2663"];

  let numran = Math.floor(Math.random() * 13 + 1);

  let num;

  mostracarta();

  function mostracarta() {
    if (numran == 11) {
      num = "J";
    } else if (numran == 12) {
      num = "Q";
    } else if (numran == 13) {
      num = "K";
    } else if (numran == 1) {
      num = "A";
    } else {
      num = numran.toString();
    }

    /*let colo = function() {
      let colran = Math.floor(Math.random() * 2 + 1);
      console.log("hola");
      let col = "";

      if (colran == 1) {
        col = "red";
        elem.style.color = "red";
      } else {
        col = "black";
        elem.style.color = "black";
      }
      return "col";
    };*/
    //creacion del numero
    let colores = color();
    let tiponaipe = tipo();
    var elem = document.createElement("H1");
    elem.innerHTML = num;
    elem.style.color = colores;
    document.querySelector("#numcarta").appendChild(elem);

    //creacion de los simbolos
    var elemar = document.createElement("h2");
    elemar.innerHTML = tiponaipe;
    elemar.style.color = colores;
    document.querySelector("#paloariba").appendChild(elemar);

    var elemab = document.createElement("h2");
    elemab.innerHTML = tiponaipe;
    elemab.style.color = colores;
    document.querySelector("#paloabajo").appendChild(elemab);
  }

  function color() {
    let colran = Math.floor(Math.random() * 2 + 1);
    let col = "";

    if (colran == 1) {
      col = "red";
    } else {
      col = "black";
    }
    return col;
  }

  function tipo() {
    let tipran = Math.floor(Math.random() * 4 + 1);
    let tip;
    switch (tipran) {
      case 1:
        tip = pinta[0];
        break;
      case 2:
        tip = pinta[1];
        break;
      case 3:
        tip = pinta[2];
        break;

      default:
        tip = pinta[3];
        break;
    }
    return tip;
  }
};
