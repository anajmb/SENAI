const nomes = ["Ana Julia", "Gabriely", "Ryu"]; 

nomes.unshift("Bia"); // adicionar nome no começo 

console.log(nomes);

nomes.push("Bia"); // adicionar nome no final 

console.log(nomes);

//Condição for 
for( let i = 0; i <= 10; i++) {
    console.log(i);
}

//método filter
const numbers = [30, 99, 35, 69];

const result = numbers.filter((item) => {
    return item > 35
})

console.log(result);