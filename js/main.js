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

//generar número aleatorio
const getRandomNumber = (max) => {
    return Math.ceil(Math.random()*max);
};

//recoge opción elegida por la usuaria
function handleClick(event){
    event.preventDefault();
    const valueSelect =  optionSelect.value; 
    // console.log(valueSelect);
    getRandomNumber(9);
     // console.log(getRandomNumber(9));
};

btn.addEventListener('click', handleClick);