"use strict";
function somarValoresNumricos(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValoresNumricos(1, 3));
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
printaValoresNumericos(2, 3);
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let soma = numero1 + numero2;
    return callback(soma);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
