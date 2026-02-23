//Seção 5 - Laço de Repetição For
function tabuada() {
    let i, n;
    for (i = 0; i <= 10; i++) {
        console.log("--------Tabuada do " + i + "--------");
        for (n = 1; n<=10; n++) {
            r = n*i;
            console.log(n + "x" + i + "=" + r);
        }
    }
}

tabuada()

// Seção 5.1 Laço de Repetição 2

function multiplosCinco() {
    for(let i = 0; i < 401; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
}

multiplosCinco();