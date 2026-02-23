// Seção 4 - Operação Condicional

function palpites() {
    const mundial = 0
    if (mundial == 0) {
        console.log("Seu time é fraco.")
    }
    else {
        console.log("Você não torce para o time errado")
    }
}

palpites();

// Seção 4.1 - Operação Condicional 2 

function vestimentaEscolar() {
    const roupa = "Cropped"
    const calcado = "Chinelo"
    if (roupa === "Cropped" || calcado === "Chinelo") {
        console.log("Pode não zé")
    }else if (roupa == "burca"){
        console.log("Seja muito bem-vinde")
    }else {
        console.log("Talvez você entre")
    }
    
}

vestimentaEscolar();