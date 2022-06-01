"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somarNumeros(numero1, numero2, devePrintar, frase) {
    let soma;
    soma = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + soma);
    }
    return soma;
}
let devePrintar = true;
let frase = "O valor é ";
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            somarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase);
        }
    });
}
