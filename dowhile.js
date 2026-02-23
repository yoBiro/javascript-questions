// Seção 6 - Laço de Repetição Do While

function fibonacci() {
    let a = 0;
    let b = 1;
    let i = 1;
    let cont = 100;
        do {
            a = a+b;
            b = a-b;
            console.log(a);
            i++;
    } while (i <= cont);
}
fibonacci();

// Seção 6.1 - Exemplo de Potência usando Do While

function potencia() {
    let base = 2;
    let expoente = 10;
    let resultado = 1;
    let i = 1;
        do {
            resultado = resultado * base;
            i++;
        } while (i <= expoente);
    console.log(resultado);
}

potencia();