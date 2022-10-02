import React from "react";


//Componente responsavel pelo login
export default function Login(){
    return (
        <section>
            <p>E-mail: </p>
            <p>Senha: </p>
            <button className="button">Entrar</button>
            
            <a rel="Cadastrar" href="Cadastrar.js">
                <button className="button">Cadastrar</button></a>
        </section>
    )
}