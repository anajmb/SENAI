const button = document.querySelector("button");
const popupW = document.querySelector(".popup-wrapper");

//exemplo de includes
const classListArray = ["teste", "oi"];
console.log(classListArray.includes("teste"));

button.addEventListener("click", function(){
    popupW.classList.add("d-block");
});

popupW.addEventListener("click", function(event){
    const classListClick = event.target.classList[0];
    const classNameArray = ["popup-close", "popup-wrapper"];
    const classIncludes = classNameArray.includes(classListClick);
});

// Fazer uma função para quando clicarmos no "Saiba mais" ele estiver incluso um link ou um texto aleatorio 



