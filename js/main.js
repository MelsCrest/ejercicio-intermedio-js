'use strict';
/*
    1.- Crear HTML (títulos, select, párrafos).
    2.-Crear las variables donde se guardan los elementos HTML a interactuar.
    3.- Escuchar eventos sobre el botón.
        - generar número aleatorio entre 1 y 9.
        - hacer comparaciones:
            - si es menor o igual a 3 -> piedra
            - si es mayor o igual a 7 -> papel
            - sino -> tijera
        - pintar en el HTML los resultados correspondientes:
            - Empate / Has ganado / Has perdido
            - puntos
*/
const optionSelect = document.querySelector('.js-select-option');
const btn = document.querySelector('.js-btn');
const resultMsg = document.
querySelector('.js-result-msg');
const playerPoints = document.querySelector('.js-player-points');
const computerPoints = document.querySelector('.js-computer-points');

function handleClick(event){
    event.preventDefault();
    const valueSelect =  optionSelect.value; //recoge opción elegida por la usuaria
    console.log(valueSelect);
};

btn.addEventListener('click', handleClick);