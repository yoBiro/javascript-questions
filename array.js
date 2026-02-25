// Seção 6 - Arrays
function array() {
    let frutas = ["Maçã", "Banana", "Laranja", "Abacaxi", "Uva"];
    console.log(frutas[0]);
    console.log(frutas[1]);
    console.log(frutas[2]);
    console.log(frutas[3]);
    console.log(frutas[4]);
}

array();

// Seção 6.1 - Arrays 2

function array2() {
    let numeros = [1, 2, 3, 4, 5];
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
    
}

array2();


//Seção 6.2 - Arrays 3 (adição)
function array3() {
    carros = ["Ford", "Ferrarri", "Tesla"]
    //índice 3, não remove nada, adiciona "Bugatti"
    carros.splice(3,0,"Bugatti")
    for (let i=0; i<=3; i++) {
        console.log(carros[i])   
    }
}
array3();

//Seção 6.3 - Arrays 4 (remoção)
function array4() {
    nomes = ["Lucas", "Gabriel", "João"]
    //índice 2, remove 1 item
    nomes.splice(2,1)
    for (let i=0; i<=3; i++) {
        console.log(nomes[i])   
    }
}
array4();
