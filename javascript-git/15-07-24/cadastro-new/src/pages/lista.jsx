import { useEffect } from "react";
import { useState } from "react";


export default function Lista () {
    //Hook Usestate dp reac para gerenciar o estado
    const [news, setnews] = useState([]); 

    //Hook useEffect para lidar com efeitos colaterais no componente
    useEffect(()=> {
        fetch("http://localhost:7000/news")
            .then((response) => response.json())
            .then((data) => setnews(data))
            
    }, [])

    console.log(news);

    return (
        <div className="container mt-4">
            {news.map((user) => (
              <>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title"> {user.nome}</h5>
                        <p className="card-text"> 
                            <strong>Email: </strong>{user.email}
                        </p>
                        <p className="card-id">
                            <strong>ID: </strong>{user.id}
                        </p>
                    </div> 
                </div>
              </>
            ))}
        </div>
    )
}