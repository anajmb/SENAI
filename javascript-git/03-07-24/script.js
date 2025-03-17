//document.getElementById("titulo").innerHTML = "Ameizu";
let nome = document.getElementById("idNome");
let cidade = document.getElementById("idCity");

function mudar (event) {
    //Previne o comportamento padrão do evento, como o envio de um formulário
    event.preventDefault();
     

    document.getElementById("titulo").innerHTML = nome.value;
    nome.value = '';
    document.getElementById("subtitulo").innerHTML = cidade.value;
    cidade.value = '';

    
    //console.log(nome.value);
}
