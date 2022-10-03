import './App.css';
import Header from './componentes/Header';
import { useState } from 'react';
import Cadastrar from './componentes/Cadastrar';
import Login from './componentes/Login';
import Selection from './componentes/Selection';

function App() {

  const [log,setLog]=useState(false)


  /*definir se o usuário já está logado ou não*/ 
// fazer função condional para "if" usuario=logado, carregar o componente de Selection, caso contrário carregar login
// função condicional para se o botão cadastrar for apertado, carregar Cadastrar
  return (
    <section className='caixa'>
      <Header className='logo'/>
      <section>
        {log?<Selection/>:<Login/>}
        <button className="button" onClick={()=>setLog(!log)}>{log?'Voltar':'Entrar'}</button>
        <a rel="Cadastrar" href="Cadastrar.js">
        <button className="button">Cadastrar</button></a>
      </section>
    </section>
  );
}

export default App;
