import './App.css';
import Header from './componentes/Header';
import Body from './componentes/Body';
import { useState } from 'react';
import Cadastrar from './componentes/Cadastrar';
import Login from './componentes/Login';

function App() {

  const [log,setLog]=useState(false) /*definir se o usuário já está logado ou não*/ 
// fazer função condional para "if" usuario=logado, carregar o componente de Selection, caso contrário carregar login
// função condicional para se o botão cadastrar for apertado, carregar Cadastrar
  return (
    <section className='caixa'>
      <Header className='logo'/>
      <Login/>
      <Cadastrar/>
    </section>
  );
}

export default App;
