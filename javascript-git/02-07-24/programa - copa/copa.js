//variáveis
let anoCopa = 1930; 
let anoLimite = prompt("Qual é o ano limite?"); 

const mostra = function(frase) {
    document.write(frase + "<br>");
}

while (anoCopa <= anoLimite) { 
    mostra(anoCopa + " tem copa!");
    //anoCopa = anoCopa + 4; 
    anoCopa += 4; 
}
mostra(`Ufa! Esses foram os anos da copa até ${anoLimite}` );