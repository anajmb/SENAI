//document.body.style.background = "red";
let mudar = document.getElementById("mudarCor");
let voltar = document.getElementById("voltarCor");


mudar.addEventListener("click", function() {
    document.body.style.background = "#8B0000";
});

//Adiciona um evento de clique ao botão 'voltar cor normal'

voltar.addEventListener("click", function(){
    document.body.style.background = "";
});
