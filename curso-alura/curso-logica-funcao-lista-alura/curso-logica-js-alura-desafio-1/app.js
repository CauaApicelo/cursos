// Manipulando HTML

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarBotaoConsole(params) {
    console.log("O botão foi clicado");
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function verificarBotaoAlert(params) {
   alert("Eu amo JS");
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function verificarBotaoPrompt(params) {
   let city = prompt("Digite o nome de uma cidade do Brasil");
   alert(`Estive em ${city} e lembrei de você`);
}

//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

function soma(params) {
    alert("Bem vindo a sua calculadora de soma")
    let number1 = parseFloat(prompt("Digite o primeiro número"));
    let number2 = parseFloat(prompt("Digite o segundo número"));

    let resultado = number1 + number2; 

    alert(`O resultado da soma entre ${number1} e ${number2} é ${resultado}`);
}