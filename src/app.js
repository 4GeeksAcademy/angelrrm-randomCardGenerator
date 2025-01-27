/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
     // Array de valores de las cartas
     const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
     // Array de símbolos de las cartas
     const suits = ["♠", "♥", "♦", "♣"];
     
     // Objeto que asigna colores a los símbolos
     const colors = {
         "♠": "black",
         "♥": "red",
         "♦": "red",
         "♣": "black"
     };
 
     // Selecciona un valor aleatorio de las cartas
     const randomValue = values[Math.floor(Math.random() * values.length)];
     
     // Selecciona un símbolo aleatorio de las cartas
     const randomSuit = suits[Math.floor(Math.random() * suits.length)];
 
     // Actualiza el valor de la carta en el centro
     document.querySelector(".card-value").innerText = randomValue;
 
     // Usa una declaración switch para actualizar los símbolos y colores de las esquinas
     switch (randomSuit) {
         case "♠":
             // Actualiza los símbolos y colores para picas
             document.querySelector(".card-suit.top-left").innerText = "♠";
             document.querySelector(".card-suit.bottom-right").innerText = "♠";
             document.querySelector(".card-suit.top-left").style.color = "black";
             document.querySelector(".card-suit.bottom-right").style.color = "black";
             break;
         case "♥":
             // Actualiza los símbolos y colores para corazones
             document.querySelector(".card-suit.top-left").innerText = "♥";
             document.querySelector(".card-suit.bottom-right").innerText = "♥";
             document.querySelector(".card-suit.top-left").style.color = "red";
             document.querySelector(".card-suit.bottom-right").style.color = "red";
             break;
         case "♦":
             // Actualiza los símbolos y colores para diamantes
             document.querySelector(".card-suit.top-left").innerText = "♦";
             document.querySelector(".card-suit.bottom-right").innerText = "♦";
             document.querySelector(".card-suit.top-left").style.color = "red";
             document.querySelector(".card-suit.bottom-right").style.color = "red";
             break;
         case "♣":
             // Actualiza los símbolos y colores para tréboles
             document.querySelector(".card-suit.top-left").innerText = "♣";
             document.querySelector(".card-suit.bottom-right").innerText = "♣";
             document.querySelector(".card-suit.top-left").style.color = "black";
             document.querySelector(".card-suit.bottom-right").style.color = "black";
             break;
     }
 }; 
