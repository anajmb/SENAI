const nome = document.querySelector("#nome")
const button = document.querySelector("button")
const lista = document.querySelector(".lista")
// DOM - navega os nossos elementos do html

// Function limpar campo 
function clearInput() {
    nome.value = "";
}

// Criando uma função
button.addEventListener("click", function(event) {
  event.preventDefault();
  const inputValue = nome.value;
  const templateHTML = `<li>${inputValue}</li>`;

  // Adicionando lista <li>
  lista.innerHTML += templateHTML;

  // LImpando campo
//   nome.value = "";
clearInput();
})
