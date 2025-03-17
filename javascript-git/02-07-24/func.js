function nomeFuncao() {
    console.log("Está é uma função!");
}

nomeFuncao();

function calc(arg1, arg2) {
    return arg1 + arg2; 
}

console.log(calc(4, 4));
console.log(calc(5, 5));

//Exercício 5 
let phrase = '';


const functions = [
    function n1() {
         return 'Plymouth' },
    function () {
         return 'é' },
    function () {
         return 'uma' },
    function () { 
        return 'cidade' },
    function () {
         return 'fantasma' },
    function () {
         return 'localizada' },
    function () {
         return 'na' },
    function () {
         return 'ilha' },
    function () { 
        return 'de' },
    function () { 
        return 'Montserrat,' },
    function () {
         return 'um' },
    function () { 
        return 'território' },
    function () { 
        return 'ultramarino' },
    function () { 
        return 'do' },
    function () { 
        return 'Reino' },
    function () {
         return 'Unido' },
    function () {
         return 'localizado' },
    function () {
         return 'na' },
    function () { 
        return 'cadeia' },
    function () {
         return 'de' },
    function () { 
        return 'Ilhas' },
    function () {
         return 'de' },
    function () { 
        return 'Sotavento' },
    function () { 
        return 'nas' },
    function () { 
        return 'Pequenas' },
    function () {
         return 'Antilhas,' },
    function () { 
        return 'Índias' },
    function () { 
        return 'Ocidentais.' } ];

        for(let i = 0; i < functions.length; i++) {
            phrase += functions[i]() + ' ';
        }
        console.log(phrase);