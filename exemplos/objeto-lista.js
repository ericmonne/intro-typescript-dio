"use strict";
const pessoa = {
    nome: 'Mariona',
    idade: 28,
    profissao: 'atacante'
};
pessoa.idade = 29;
const alexia = {
    nome: 'Alexia',
    idade: 28,
    profissao: 'meia'
};
const pedri = {
    nome: 'Pedro',
    idade: 19,
    profissao: 'meia'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atacante"] = 0] = "Atacante";
    Profissao[Profissao["Meia"] = 1] = "Meia";
    Profissao[Profissao["Zagueiro"] = 2] = "Zagueiro";
    Profissao[Profissao["Zagueira"] = 3] = "Zagueira";
    Profissao[Profissao["Lateral"] = 4] = "Lateral";
    Profissao[Profissao["Goleiro"] = 5] = "Goleiro";
    Profissao[Profissao["Goleira"] = 6] = "Goleira";
})(Profissao || (Profissao = {}));
const ronald = {
    nome: 'Ronald',
    idade: 23,
    profissao: Profissao.Zagueiro
};
const arnau = {
    nome: 'Arnau',
    idade: 21,
    profissao: Profissao.Goleiro,
    materias: ['Economia', 'Pensamento Social']
};
const clement = {
    nome: 'Clement',
    idade: 26,
    materias: ['Errar passes', 'Cometer pênaltis']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(clement.materias);
