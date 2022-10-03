import React from "react";


//Esse componente é responsavel por cuidar da seleção de cidades, selecionando a cidade ele vai chamar o componente da cidade selecionada.
//criar uma map function pra já adicionar todas as cidades os devidos botões, dessa forma podemos adicionar novas cidades diretamente pelo array e o botão será gerado
//então usar um state para pegar qual foi a cidade selecionada e então retornar o componente da mesma
export default function Selection(){
    return(
        <section>
            <button>Foz do iguaçu</button>
            <button>Ciudad Del Este</button>
            <button>Presidente Franco</button>
            <button>Puerto Iguaçu</button>
        </section>
    )
}