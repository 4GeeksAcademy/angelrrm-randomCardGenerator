/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    // Array de valores de las cartas
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; 
    // Array de símbolos de las cartas
    const suits = ["♠", "♥", "♦", "♣"]; 
    // Objeto que asigna colores a los símbolos
    const colors = { "♠": "black", "♥": "red", "♦": "red", "♣": "black" }; 
    // Obtener los elementos de la esquina superior e inferior
    const suitTop = document.querySelector(".card-suit.top-left");
    const suitBottom = document.querySelector(".card-suit.bottom-right");

    // Función para generar una nueva carta
    function generateCard() {
        const randomSuit = suits[Math.floor(Math.random() * suits.length)];
        const randomValue = values[Math.floor(Math.random() * values.length)];

        // Actualiza el valor de la carta en el centro
        document.querySelector(".card-value").innerText = randomValue;

        // Actualiza los símbolos y colores de las esquinas
        suitTop.innerText = randomSuit;
        suitBottom.innerText = randomSuit;
        suitTop.style.color = colors[randomSuit];
        suitBottom.style.color = colors[randomSuit];
    }

    // Añadir evento de clic al botón para generar una nueva carta
    document.getElementById("generateCard").addEventListener("click", generateCard);

    // Generar una carta inicial al cargar la página
    generateCard();
};
