import React from 'react';
import Botao from './componentes/botao'
import Display from './componentes/display';
import './calculadora.css';

function App() {
  return (
    // <div class='classes'
    <div className='calculadora'>
      <Display />
      <Botao texto='AC' />
      <Botao texto='/' />
      <Botao texto='7' />
      <Botao texto='8' />
      <Botao texto='9' />
      <Botao texto='*' />
      <Botao texto='4' />
      <Botao texto='5' />
      <Botao texto='6' />
      <Botao texto='-' />
      <Botao texto='1' />
      <Botao texto='2' />
      <Botao texto='3' />
      <Botao texto='+' />
      <Botao texto='0' />
      <Botao texto='.' />
      <Botao texto='=' />
    </div>
  );
}

export default App;
