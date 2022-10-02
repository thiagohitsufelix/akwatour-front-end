import React from "react";


//esse componente é responsavel pelo cadastro, só será chamado para cadastrar novos usuários
export default function Cadastrar(){
    return (
        <section>
            <p>Nome: </p>
            <p>E-mail: </p>
            <p>Senha: </p>
            <p>Cidade: </p>
            <button>Registrar</button>
            <button>Voltar</button>
        </section>
    )
}