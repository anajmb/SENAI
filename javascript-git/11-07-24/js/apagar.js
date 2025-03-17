const bntApagar = document.querySelector('#apagar');

bntApagar.addEventListener("click", () => { 
    localStorage.clear();

    // limpa lista de interface 
    listaValores.innerHTML = "";
})