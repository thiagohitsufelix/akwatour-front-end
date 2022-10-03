import React, { useState } from "react";


//Componente responsavel pelo login
export default function Login(){

    const [log,setLog]=useState(false)
    const [email,setEmail]=useState('')
    const [senha, setSenha]=useState('')

    return (
        <section>
            <label>Email:</label>
            <input 
                type="text" 
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <label>Senha:</label>
            <input 
                type="text" 
                name="email"
                value={senha}
                onChange={(e)=>setSenha(e.target.value)}
            />
        </section>
    )
}