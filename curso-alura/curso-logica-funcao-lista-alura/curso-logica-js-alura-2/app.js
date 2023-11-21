// Lista de números sorteados
let listaDeNumerosSorteados = [];

let numeroLimite = 10;

// Variável que armazena o número secreto 
let numeroSecreto = gerarNumeroAleatorio();

// Variável das tentivas que se inicia com 1
let tentivas = 1;



// Função que manipula uma tag e muda o texto
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(params) {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

// Função que verifica o valor posto no input e fazer as condições
function verificarChute(params) {
    let chute = document.querySelector('input').value; //pegar o valor do input
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!'); //Utilizei a função exibirTextoNaTela para exibir no h1 a mensagem "Acertou!"
        // Se tentativa for maior que 1, então 'tentativas', se não 'tentativa'.
        let palavraTentativa = tentivas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Você acertou o número secreto com ${tentivas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);

        // Desabilitando o disabled do button reiniciar 
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentivas++;
        limparCampo();
    }
}

// Função que gera o número aleatório de forma inteira 
function gerarNumeroAleatorio(params) {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadedeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadedeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados == [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

// Função para limpar o campo
function limparCampo(params) {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(params) {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentivas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


// length = tamanho da lista 