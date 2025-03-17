//Criando as variáveis
const nome = document.getElementById("nome")

const cidade = document.getElementById("cidade")

const resultado = document.getElementById("resultado")

const resultadoCid = document.getElementById("resultadoCid")

//Criando uma função
function limparCampos() {
    // Limpando os campos
    nome.value = "";
    cidade.value = "";
}

function mudar(event) {
    event.preventDefault(); // previne o comportamento padrão do browser

    // imprimir nome na tela
    resultado.innerHTML = nome.value; // innerHTML = manda função pra tela
    resultadoCid.innerHTML = cidade.value;
    
    limparCampos();
};



