const pessoa = {
    nome: 'Mariona',
    idade: 28,
    profissao: 'atacante'
}

pessoa.idade = 29;

const alexia: {nome: string, idade: number, profissao: string} = {
    nome: 'Alexia',
    idade: 28, 
    profissao: 'meia'
}

const pedri: {nome: string, idade: number, profissao: string} = {
    nome: 'Pedro',
    idade: 19, 
    profissao: 'meia'
}

enum Profissao {
    Atacante,
    Meia,
    Zagueiro,
    Zagueira,
    Lateral,
    Goleiro,
    Goleira
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
   materias: string[] 
}

const ronald: Pessoa = {
    nome: 'Ronald',
    idade: 23,
    profissao: Profissao.Zagueiro
}

const arnau: Estudante = {
    nome: 'Arnau',
    idade: 21, 
    profissao: Profissao.Goleiro,
    materias: ['Economia', 'Pensamento Social']
}

const clement: Estudante = {
    nome: 'Clement',
    idade: 26,
    materias: ['Errar passes', 'Cometer pênaltis']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item);
    }
}

listar(clement.materias);