// mostrar o valor quando o controle de faixa está sendo arrastado 

let range = document.querySelector("#range");
let rangeValue = document.querySelector("#rangeValue"); 

range.addEventListener("input", function(event) { 
    rangeValue.textContent = ` Valor: ${range.value}`



})