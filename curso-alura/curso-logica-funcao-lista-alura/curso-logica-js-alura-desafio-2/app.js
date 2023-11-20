// 1 - Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundo(params) {
    let mensagem = "Olá, mundo!"
    console.log(mensagem);
}

exibirOlaMundo();

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}`);
}

exibirOlaNome("Cauã");

// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroDeUmNumero(numero) {
    // Não é necessário declarar a variável novamente, pois já está sendo recebida como parâmetro.
    return numero * 2;
}
console.log(dobroDeUmNumero(2));
console.log(dobroDeUmNumero(6));

// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

console.log(calcularMedia(10, 10, 10));
console.log(calcularMedia(10, 5, 7));

// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaiorQue(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(numeroMaiorQue(4, 9));
console.log(numeroMaiorQue(4, 1));

// 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacaoQuadrado(a) {
    return a * a;
}

console.log(multiplicacao(5));
console.log(multiplicacao(15));