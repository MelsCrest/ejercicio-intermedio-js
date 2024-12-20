'use strict';
/*
    1.- Crear HTML (títulos, select, párrafos).
    2.-Crear las variables donde se guardan los elementos HTML a interactuar.
    3.- Escuchar eventos sobre el botón.
        - generar número aleatorio entre 1 y 9.
        - generar la jugada del ordenador:
            - si es menor o igual a 3 -> piedra
            - si es mayor o igual a 7 -> papel
            - sino -> tijera
        - generar comparaciones jugada usuaria / jugada ordenador
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

//los hago globales para que no se reseteen cada vez que se ejecuta la función y así se guarden los valores nuevos.
let numPlayer = 0;
let numPC = 0;

// Número aleatorio
const getRandomNumber = (max) => {
    return Math.ceil(Math.random()*max);
};

// Partida ordenador
function computerPlay(){
    const randomNum = getRandomNumber(9);
    let computerPlay = '';

    if(randomNum <=3){
        computerPlay = 'stone';
    }else if(randomNum >=7){
        computerPlay = 'paper';
    }else{
        computerPlay = 'scissor';
    };
    //console.log(computerPlay);
    return computerPlay;
};

// Partida usuaria - ordenador
function compareResult(computerPlay, userPlay){
    
    if(computerPlay === userPlay){
        resultMsg.innerHTML = "Empate";
    }else if(computerPlay === "stone" && userPlay === "paper"){
        resultMsg.innerHTML = "Has ganado!";
        numPlayer++;
    }else if(computerPlay === "stone" && userPlay === "scissor"){
        resultMsg.innerHTML = "Has perdido!";
        numPC++;
    }else if(computerPlay === "paper" && userPlay === "stone"){
        resultMsg.innerHTML = "Has perdido!";
        numPC++;
    }else if(computerPlay === "paper" && userPlay === "scissor"){
        resultMsg.innerHTML = "Has ganado!";
        numPlayer++;
    }else if(computerPlay === "scissor" && userPlay === "stone"){
        resultMsg.innerHTML = "Has ganado!";
        numPlayer++;
    }else if(computerPlay === "scissor" && userPlay === "paper"){
        resultMsg.innerHTML = "Has perdido!";
        numPC++;
    }
    
    playerPoints.innerHTML = numPlayer;
    computerPoints.innerHTML = numPC;
};

// Resultado de la jugada
function handleClick(event){
    event.preventDefault();
    //recoge opción elegida por la usuaria
    const valueSelect =  optionSelect.value; 
    //recoge opción elegida por el ordenador
    let pcPlay = computerPlay();
    //console.log(pcPlay);
    compareResult(pcPlay, valueSelect);
};

// Generar jugada
btn.addEventListener('click', handleClick);