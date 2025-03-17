let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

//Botões
const somar = document.getElementById("somar");
const subtrair = document.getElementById("subtrair");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");


//Botão resultado 
const resultado = document.getElementById("resultado");

// Adiciona um evento de clique no botão 

somar.addEventListener("click", function(event){
   // console.log(valor1.value);
    //console.log(valor2.value);
    let soma = Number(valor1.value) + Number(valor2.value);
    // Exibe o resultado na tela
    resultado.textContent = soma;

    valor1.value = ""; 
    valor2.value = "";

    setTimeout(function() {
        //console.log("teste");
        resultado.innerHTML = 0;
    }, 3000);
});

subtrair.addEventListener("click", function(event){
    // console.log(valor1.value);
     //console.log(valor2.value);
     let subtração = Number(valor1.value) - Number(valor2.value);
     // Exibe o resultado na tela
     resultado.textContent = subtração;
 
     valor1.value = ""; 
     valor2.value = "";
 
     setTimeout(function() {
         //console.log("teste");
         resultado.innerHTML = 0;
     }, 3000);
 });

 multiplicar.addEventListener("click", function(event){
    // console.log(valor1.value);
     //console.log(valor2.value);
     let multiplicação = Number(valor1.value) * Number(valor2.value);
     // Exibe o resultado na tela
     resultado.textContent = multiplicação;
 
     valor1.value = ""; 
     valor2.value = "";
 
     setTimeout(function() {
         //console.log("teste");
         resultado.innerHTML = 0;
     }, 3000);
 });

 dividir.addEventListener("click", function(event){
    // console.log(valor1.value);
     //console.log(valor2.value);
     let divisao = Number(valor1.value) / Number(valor2.value);
     // Exibe o resultado na tela
     resultado.textContent = divisao;
 
     valor1.value = ""; 
     valor2.value = "";
 
     setTimeout(function() {
         //console.log("teste");
         resultado.innerHTML = 0;
     }, 3000);
 });