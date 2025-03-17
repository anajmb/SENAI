let teste = 1;

switch(teste) {
    case 1: 
        console.log("Foi de primeira"); 
        break; 
    case 2:
        console.log("Foi na segunda vez!"); 
        break; 
    default: 
        console.log("Não foi nem na primeira e nem na segunda");
        break; 
}

//exercício 1 
const drinkType = 'Cachaça'; 

switch(drinkType) { 
    case 'Água': 
        console.log("Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.");
        break; 
    case 'Refrigerante': 
        console.log("Bebida não alcoólica e não fermentada, fabricada industrialmente, á base de água mineral e açúcar.");
        break;  
     case 'Suco': 
        console.log("Bebida produzida do líquido extraído de frutos.");
        break; 
    default:
        console.log("Bebida desconhecida.");  
        break;  
}