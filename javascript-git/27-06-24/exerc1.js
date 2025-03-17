//Atividade 1 
const hours = 10; 

const bomDia = hours >= 6 && hours < 12;
const boaTarde =  hours >= 12 && hours < 18
const boaMadrugada= hours >= 1 && hours < 6;

if(bomDia) { 
    console.log("Bom dia!"); 
} else if(boaTarde) { 
    console.log("Boa tarde!");
} else if (boaMadrugada){ 
    console.log ("Boa madrugada!");
} else {
    console.log("Boa noite!")
}

//Atividade 2 
let idade = 16; 
const gratis = idade <= 7 || idade >= 65;

if(gratis) { 
    console.log("Para você, a entrada é grátis!"); 
} else { 
    console.log("A entrada é R$ 30,00.");
}

//Atividade 3 
for( const crazyArray = [true, 869, "oi", 71, false, 83, "35", true, 397, "js", false];  i <= 10; i++);