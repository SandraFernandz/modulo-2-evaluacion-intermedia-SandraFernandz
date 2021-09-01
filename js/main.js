'use strict';

const update = document.querySelector('.js_update');
const numberInput = document.querySelector('.js_number');
const hint = document.querySelector('.js_tries');
const counter = document.querySelector('.js_counter');

//función que crea un número random 
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

//recogemos la función de crear random number en una variable y le pasamos el parámetro del número máximo del juego (no pasamos el parámetro en la función handler porque si no se recargaría un nuevo número aleatorio cada vez que cargásemos la página)
const randomNum = getRandomNumber(100);
    console.log(randomNum);


console.log(numberInput.value);

//función que genera pistas del número aleatorio creado, según el número que introduce el usuario 
function guessNumber(){
    if(numberInput.value < 0 || numberInput.value >= 101){
        hint.innerHTML = 'Por favor, introduce un número entre 0 y 100'
    }else if(randomNum === numberInput.value){
        hint.innerHTML = '¡Felicidades!'
    }else if(randomNum > numberInput.value){
        hint.innerHTML = 'El número es demasiado bajo, inténtalo de nuevo'
    }else if(randomNum < numberInput.value){
        hint.innerHTML = 'El número es demasiado alto, prueba otra vez'
    }
}

//función que cuenta los intentos 
//creamos variable fuera para que no se reescriba valor
 let count = 0;
 function counterSelect(){
     count++;
     counter.innerHTML = `Ya lo has intentado ${count} veces`;
}

//función que engloba las funciones que se desencadenan al escuchar el mismo elemento

 function handlerGuessNumber(){
     guessNumber();
     counterSelect();
 }

update.addEventListener('click', handlerGuessNumber);