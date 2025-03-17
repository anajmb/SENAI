const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

//Criando uma função para limpar o campo
function clearForm() {
   inputNota.value = "";
}


//criando uma função
button.addEventListener("click", function(event) {
    event.preventDefault();
    const valorDaNota = inputNota.value;
    //console.log(inputNota.value);
   
    //Validação de formulário
   if(valorDaNota === '') { 
      alert("Campo obrigátorio");
      return false; 
   }
   
    //Lógica 
 if(valorDaNota >= 6) { 
    alert("Você foi aprovado");
 } else { 
    alert("Você foi reprovado");
 }
   
 //Chamando a função limpar campo
 clearForm();





});

