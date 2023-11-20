function calcularMedia(nota1, nota2, nota3, nota4) {
    let media =  (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}

console.log(calcularMedia(7, 6, 3, 5));

function verificarAprovacao(media) {
    return media >= 5 ? 'Aprovado' : 'Reprovado'
}

console.log(verificarAprovacao());