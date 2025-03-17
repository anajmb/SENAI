const maquiagem = ['MariMaria', 'Bruna tavares', "Gkay"];

console.log(maquiagem.includes("MariMaria"));

//exercício 2 
const fruits = ["morango", "banana", "mamão", "pêra"];

console.log(fruits.includes("abacaxi"));
if(fruits.includes("abacaxi")) {
    console.log("A string abacaxi estiste no array fruits.");
} else if (fruits.includes("pêra")) {
    console.log("A string pêra existe no array fruits.");
} else {
    console.log("Nem pêra, nem abacaxi existem no array fruits."); 
}