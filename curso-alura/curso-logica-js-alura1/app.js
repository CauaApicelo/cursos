// O alert mostra uma caixa de aviso com o conteúdo inserido, sendo apenas para exibir algo
alert("Boas Vindas ao jogo do número secreto");
// declarar variável 
let numeroMaximo = 1000; 
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 ); // O " = " significa receber  
console.log(numeroSecreto)

let chute;

let tentativa = 1; 

// Enquanto - loop chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    // exibe uma caixa de diálogo com uma mensagem inserida solicitando ao usuário a entrada de algum texto.
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)

    // Condicional - " == " --> igual, se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativa++;
    }
}

// Operador ternário - reduzir os if/else
let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa"
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}`)

// Outra forma:
// if (tentativa > 1) {
//     alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativa} tentativas`)
//         // Template Strings - Forma de concatenar, seguindo o examplo acima 
// } else {
//     alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativa} tentativa`)
//         // Template Strings - Forma de concatenar, seguindo o examplo acima 
// }


// window.confirm("Tudo bem?");
