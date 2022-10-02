import './App.css';
import Header from './componentes/Header';
import Body from './componentes/Body';
import { useState } from 'react';
import Cadastrar from './componentes/Cadastrar';

function App() {

  const [log,setLog]=useState(false)

  return (
    <section className='caixa'>
      <Header className='logo'/>
      <Body/>
    </section>
  );
}

export default App;
