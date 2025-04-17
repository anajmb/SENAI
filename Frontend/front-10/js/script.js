function fetchObjetos() {
   fetch("https://jsonplaceholder.typicode.com/posts")
   .then((resposta) => resposta.json())
   .then((posts) => {
        const postContainer = document.getElementById("posts")

        posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");

            // Montar um h2 -> title
            const postTitle = document.createElement("h2")
            postTitle.textContent = post.title;
            
            //Montar a tag p e buscar o body
            const postBody = document.createElement("p");
            postBody.textContent = post.body;

            // Adicionar estrutura na tela 
            // Chamar uma estrutura HTML
            postDiv.appendChild(postTitle);
            postDiv.appendChild(postBody)

            postContainer.appendChild(postDiv);
        });
   });
}

fetchObjetos();