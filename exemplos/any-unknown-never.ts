let anyEstaDeVolta: any;
let unknownValue: any;

anyEstaDeVolta = 32;
let stringTeste: string = 'verificar';
stringTeste: anyEstaDeVolta;

unknownValue: 33;
unknownValue: 'valor';
unknownValue: false;
unknownValue: 'confia';
let stringTeste2: string = "olha só";
/* stringTeste2 = unknownValue; */

if(typeof unknownValue === 'string'){
    stringTeste2 = unknownValue;
    console.log(stringTeste2);
} 
console.log(unknownValue);


function jogaErro(erro: string, codigo: number): never{
    throw{error: erro, code: codigo};
}

jogaErro('deu erro', 500);