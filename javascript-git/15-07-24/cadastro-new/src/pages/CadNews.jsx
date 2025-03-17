import { useState } from "react"

export default function CadNews() {
    //Estado inicial do formulário 
    const initialForm = {
        nome: "",
        email: ""
    }
    //Estado do formulário 
    const [formState, setFormState] = useState(initialForm);

    //Funcão para lidar com a alteracão dos campos - js
    const handleInput = (event) => {
    //Obter o elemento de entrada atual - js 
    const target = event.currentTarget;
    //Extrair o valor do campo - js
    const {value, name} = target;
    //Atualizar o estado do formulãrio com os novos valores
    setFormState({...formState, [name]: value});

    }
    //Funcão para lidar com a submissão do formulário 
    const handleSubmit = (event) => {
        event.preventDefault();

        const formGeneral = {nome: formState.nome, email: formState.email    
        }

        const requestOptions = {
            method: 'POST', 
            headers:  {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(formGeneral),
            }

        fetch("http://localhost:7000/news", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            //Limpar os campos do formulário definindo o estado inicial 
            setFormState({...initialForm})
        })

        console.log(formGeneral);
    }

    return(
        <div className="container mt-4">
            <h2>Cadastro </h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" name="nome" value= {formState.nome} onChange = {handleInput} id="nome" required  />
                </div>
                <div className="form-group1">
                <label htmlFor="nome">Email:</label>
                <input type="email" className="form-control" name="email" value= {formState.email} onChange = {handleInput} id="email" required  />
                </div>
                <button type="submit" className="btn btn-primary mt-3 ">Cadastrar</button>
            </form>
        </div>
    )
}