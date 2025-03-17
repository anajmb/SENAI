// Obtem os elementos do DOM
const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")

// Variável resultado
const resultado = document.getElementById("resultado")

function limparCampos() {
       valor1.value = ""
       valor2.value = ""
}
function tempo() {
    setTimeout(function() {
        resultado.innerHTML = 0;
   }, 2000);
}


// Criando funcion
function somar(event) {
    event.preventDefault();
   let resultadoSoma = Number(valor1.value) + Number(valor2.value);
   
   resultado.innerHTML = resultadoSoma;

 limparCampos();

 // time
 tempo();
}

function subtrair(event) {
    event.preventDefault();
   let resultadoSubtrair = Number(valor1.value) - Number(valor2.value);
   
   resultado.innerHTML = resultadoSubtrair;
   
   limparCampos();

   // time
   tempo();
}

function dividir(event) {
    event.preventDefault();
   let resultadoDividir = Number(valor1.value) / Number(valor2.value);
   
   resultado.innerHTML = resultadoDividir;
   
   limparCampos();

   // time
   tempo();
}

function multiplicar(event) {
    event.preventDefault();
   let resultadoMultriplicar = Number(valor1.value) * Number(valor2.value);
   
   resultado.innerHTML = resultadoMultriplicar;
   
   limparCampos();

   // time
   tempo();
}