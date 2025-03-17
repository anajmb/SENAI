console.log(!true);
console.log(!false);

//Exercício 4 
const animals = ["macaco", "tucano", "pavão", "hipopótamo", "leão"];

if(animals.includes(!"leão")) {
    console.log("Leão não existe no array animals.")
} else {
    console.log("Existe um leão no array animals.");
}

