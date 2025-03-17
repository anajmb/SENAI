// Um programa para dizer se a pessoa pode viajar ou não
let dinheiro = true
let tempo = false 

if(dinheiro && tempo){
    console.log("Pode viajar!")
} else {
    console.log("Não pode viajar")
}

// Sistema de acesso
let usuarioLogado = true
let usuarioTemPermisao = false

// || significa ou
if(usuarioLogado || usuarioTemPermisao) {
    console.log("acesso permitido")
} else {
    console.log("Acesso negado")
}
