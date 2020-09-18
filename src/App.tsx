import React, {useState} from 'react';
import Botao from './componentes/botao'
import Display from './componentes/display';
import './calculadora.css';

function App() {
  // useState hook
  // ciclo de vida e estado
  const [inicial, setInicial] = useState({
    displayValor: '0',
    limparDislpay: false,
    operacao: null,
    valores: [0, 0],
    atual: 0
  });

  return (
    // <div class='classes'
    <div className='calculadora'>
      <Display valor={inicial.displayValor} />
      <Botao texto='AC' tipo='triple' />
      <Botao texto='/' tipo='operacao'/>
      <Botao texto='7' />
      <Botao texto='8' />
      <Botao texto='9' />
      <Botao texto='*' tipo='operacao' />
      <Botao texto='4' />
      <Botao texto='5' />
      <Botao texto='6' />
      <Botao texto='-' tipo='operacao' />
      <Botao texto='1' />
      <Botao texto='2' />
      <Botao texto='3' />
      <Botao texto='+' tipo='operacao' />
      <Botao texto='0'  tipo='double'/>
      <Botao texto='.' />
      <Botao texto='='  tipo='operacao'/>
    </div>
  );
}

export default App;
