// Seção 8 - Laço de Repetição While

export function contagemRegressiva(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

// Seção 8.1 - Laço de Repetição While 2

export function somaAteCem() {
    let i = 1;
    let soma = 0;
    while (i <= 100) {
        soma += i;
        i++;
    }
    console.log(soma);
}