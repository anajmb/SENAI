const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
    .then((res) => res.json())
    .then((usuarios) => {
        const lista = document.querySelector("#lista");

        const carregando= document.getElementById("carregando");
        carregando.remove();
        
        usuarios.forEach((usuario) => {
            const item = document.createElement("li");
            item.textContent = `${usuario.name} - ${usuario.email} - ${usuario.address.city}`
            lista.appendChild(item);
        });
    })
    .catch((error) => {
        console.error("Erro ao buscar user", error);
        // const carregando= document.getElementById("carregando");
        // carregando.textContent = "Erro ao carregar os dados";
        

    })

