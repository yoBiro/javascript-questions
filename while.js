// Seção 8 - Laço de Repetição While

function contagemRegressiva() {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

contagemRegressiva();

// Seção 8.1 - Laço de Repetição While 2

function somaAteCem() {
    let i = 1;
    let soma = 0;
    while (i <= 100) {
        soma += i;
        i++;
    }
    console.log(soma);
}

somaAteCem();