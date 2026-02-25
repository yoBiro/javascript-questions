// Seção 4 - Operação Condicional

function ifComum() {
    const mundial = 0
    if (mundial == 0) {
        console.log("Seu time é fraco.")
    }
    else {
        console.log("Você não torce para o time errado")
    }
}

ifComum();

// Seção 4.1 - Operação Condicional 2 

function ifUnitario() {
    const roupa = "Cropped"
    const calcado = "Chinelo"
    if (roupa === "Cropped" || calcado === "Chinelo") {
        console.log("Pode não zé")
    }
}

ifUnitario();

function ifComposto() {
    const destino = "Ilhabela"
    const dias = 3
    if (destino === "Ilhabela" && dias === 3) {
        console.log("Boa viagem!")
    }else if (destino == "Rio de Janeiro" || destino === "Salvador") {
        console.log("Boa sorte...")
    }else{
        ("Melhor ficar em casa")
    }
}
ifComposto();

function ternario() {
    let foo = false
    let bananas = foo ? 10 : 20 
    console.log(bananas)
}

ternario();