import React from 'react';
import './botao.css'

interface Props {
    texto: string;
    tipo?: string;
}

// componente funcional
const Botao: React.FC<Props> = ({texto, tipo}) => {
    let classes = 'botao ';
    // sintaxe do react (javascript com html)
    classes += tipo==='operacao' ? 'operacao': '';
    classes += tipo==='double' ? 'double': '';
    classes += tipo==='triple' ? 'triple': '';
    return (
        <button className={classes} onClick={()=> {
            texto = 'V'
        }}>{texto}</button>    
    )
}

export default Botao;