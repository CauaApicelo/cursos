

// Manipulando Texto com JS
// let titulo = document.querySelector('h1'); 
// titulo.innerHTML = "Jogo do Número Secreto" ;

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

// let button = document.querySelector('#teste'); 
// button.innerHTML = "Novo botão, kkkkkkkkkkkkk";

// Criando função

// function verificarChute(params) {

// }

let numeroSecreto = gerarNumeroAleatorioi();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(params) {
    let chute = document.querySelector('input').value; //pegar o valor do input
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorioi(params) {
    return parseInt(Math.random() * 10 + 1);
    
}
