//Obtém o botão e a imagem do DOM
const botao = document.getElementById("moverIMG");
let imagem =document.getElementById("imagem");

//Variável para rastrear o estado atual da posição da imagem 
let isMoved = false;

//Adiciona um evento de clique ao botão 
botao.addEventListener("click", function(){
    if(isMoved) {
        imagem.style.left = "0"; //Move a imagem para a posição original 
    } else { 
        imagem.style.left = "500px" //Move a imagem para a direita 
    }
    isMoved = !imagem
});
