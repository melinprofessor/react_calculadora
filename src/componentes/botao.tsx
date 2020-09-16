import React from 'react';
import './botao.css'

interface Props {
    texto: String
}
// componente funcional
const Botao: React.FC<Props> = (props) => {

    // sintaxe do react (javascript com html)
    return (
        <button className='botao'>{props.texto}</button>    
    )
}

export default Botao;