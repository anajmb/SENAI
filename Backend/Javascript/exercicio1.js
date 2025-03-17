let idade = 500
let anoAtual = 2025
let ano = anoAtual - idade 

if(ano >= 1946 && ano <= 1964){
    console.log("Baby bommer")
} else if(ano >= 1965 && ano <= 1980){
    console.log("Geração x")
}else if(ano >= 1981 && ano <= 1996){
    console.log("Millenial")
} else if(ano >= 1997 && ano <= 2010){
    console.log("Geração z")
} else if(ano >= 2010 && ano <= 2024){
    console.log("Geração alpha")
} else if(ano >= 2025 && ano <= 2039){
    console.log("Geração beta")
} else {
    console.log("Não é possivel te informar")
}

// Exercicio 2 
let peso = 900
let altura = 1.75
let IMC = peso / (altura * altura)

if(IMC < 18.5) {
    console.log("Abaixo do peso")
} else if(IMC >= 18.5 && IMC <= 24.9) {
    console.log("Peso normal")
} else if(IMC >= 25 && IMC <= 29.9) {
console.log("Sobrepeso")
} else if(IMC >= 30) {
    console.log("Obesidade")
} else {
    console.log("Não posso te informar")
}

// Exercicio 3 
let idade3 = 17
let valorCompra = 350;

if(idade3 >= 60){
    console.log(valorCompra - (valorCompra * 0.2))
} else if(idade3 <= 18){
    console.log(valorCompra - (valorCompra*0.1))
} else if(valorCompra >= 500){
    console.log(valorCompra - (valorCompra * 0.15))
} else {
    console.log(valorCompra - (valorCompra * 0.5))
}