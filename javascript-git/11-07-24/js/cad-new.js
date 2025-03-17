const bntSalvar = document.querySelector('#salvar');
const campo = document.querySelector("#campo");

//Criando um elemento p 
const pMensagem = document.createElement("p");

//Adicionar evento de clique no bnt salvar 
bntSalvar.addEventListener("click", function() {
    const valor = campo.value;

    //validação 
    if(valor.trim() === "") {
        //alert("Não pode ser salvo")
        pMensagem.textContent = "Campo obrigatório";
        campo.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        return false;
    } 

    //console.log(valor);
    // Salvar no LocalStorage
    const chave = `valorSalvo_${Date.now()}`
      localStorage.setItem(chave, valor);

   //Limpar campo após salvar 
   campo.value = "";

 //
   carregarValoresSalvos();
})

