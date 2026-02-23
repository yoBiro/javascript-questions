// Seçao 3 - Operações Aritméticas

function operacoesBasicas() {
    const numeroUm = 10;
    const numeroDois = 85;

    const soma = numeroDois + numeroUm;
    const subtracao = numeroDois - numeroUm;
    const multiplicacao = numeroDois * numeroUm;
    const divisao = numeroDois / numeroUm;

    console.log("Soma: " + soma)
    console.log("Subtração: " + subtracao)
    console.log("Multiplicação: " + multiplicacao)
    console.log("Divisão: " + divisao)
}

operacoesBasicas();

// Seção 3.1 - Operações Avançadas

function operacoesAvancadas() {
    const numeroUm = 10;
    const numeroDois = 4;

    const potencia = numeroUm ** numeroDois;
    const resto = numeroUm % numeroDois;
    const raiz = Math.sqrt(numeroDois);

    console.log("Potência: " + potencia)
    console.log("Resto: " + resto)
    console.log("Raiz: " + raiz)
}

operacoesAvancadas();