import React from 'react';
import './display.css'

interface Props {
    valor: string;
}
const Display: React.FC<Props> = ({valor}) => {

    return (
    <div className='display'>{valor}</div>
    )
}

export default Display;