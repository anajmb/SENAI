//Exercício 1 
let count1 = 0; 

while (count1 <= 5) {
    console.log(count1);
    count1++;
}

//Exercício 2 
let count2 = 0;
 
while  (count2 <= 10) {
    console.log(`4 x ${count2} = ${i*4}`); 
    count2++;
}


for (let i = 0;  i <= 10; i++) {
   console.log(i*4);
}

//Exercício 3 
const arrays = [[4, 32, 8], [64, 8, 32], [8, 32, 16], [2, 8, 4] ]; 

let numbersArrays = 0; 

for (let i = 0; i < arrays.length; i++) {
    console.log(arrays[i]);
    for ( let j = 0; j < arrays[i].length; j++) {
     console.log(arrays[j]);
        numbersArrays += arrays[i][j];
    }

}
console.log(numbersArrays);

//Exercício 4 

const names = ['João Grilo', 'Chicó', 'Rosinha'];
let tipoNomes = ''; 

for (let x = 0; x < names.length; x++) {
    tipoNomes += `<li>${names[x]}</li>`
}
console.log(tipoNomes);

//Exercício 5 

const numbers = ['91', '5', '30', '97', '83', '31']; 
let soma = 0; 

for (let i = 0; i < numbers.length; i++) {
        soma += Number(numbers[i]);
    }
    console.log(soma === 337);

    // Exercício 6 

const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']; 
let upperCaseCities = []; 

for (let i = 0; i < cities.length; i++) {
    upperCaseCities.push (cities[i].toUpperCase());
}
console.log(upperCaseCities);