"use strict";
let anyEstaDeVolta;
let unknownValue;
anyEstaDeVolta = 32;
let stringTeste = 'verificar';
stringTeste: anyEstaDeVolta;
unknownValue: 33;
unknownValue: 'valor';
unknownValue: false;
unknownValue: 'confia';
let stringTeste2 = "olha só";
/* stringTeste2 = unknownValue; */
if (typeof unknownValue === 'string') {
    stringTeste2 = unknownValue;
    console.log(stringTeste2);
}
console.log(unknownValue);
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
