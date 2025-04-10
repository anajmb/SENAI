const cars = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2019
    },
    {
        brand: "Ford",
        model: "Fiesta",
        year: 2014
    },
    {
        brand: "Ford",
        model: "Focus",
        year: 2018
    },
    {
        brand: "Fiat",
        model: "Uno",
        year: 2018
    }
];

console.log(typeof cars);
console.log(cars);
console.log(cars[0].brand);
console.log(cars[2].model);

// Criar function
function displayCars () {
      const cardList = document.querySelector("#card-list");

      cars.forEach((car) => {
        
        const cardDiv = document.createElement("div");
        // Criando uma classe css car
        cardDiv.classList.add("car");
        // Criando modelo 
        const cardModel = document.createElement("h2");
        cardModel.textContent = `${car.brand} ${car.model}`; // template string

        // Criando o ano 
        const cardYear = document.createElement("p")
        cardYear.textContent = `Ano: ${car.year}`

        
        cardDiv.appendChild(cardModel);
        cardDiv.appendChild(cardYear);
        cardList.appendChild(cardDiv); // appendChild = aparecer na tela ou montar a estrutura

      });
}
//chamar function
displayCars();

