import React from 'react'
import './categoria.css'

export default function Categoria(props) {

  const classeCategoriaBox = `categoria-box ${props.cor}`

  return (
    <div className={classeCategoriaBox}>
        <p className='titulo-categoria'>{props.titulo}</p>
        <div className='display-img'>
            <img src={props.img} className='imagem'></img>
        </div>
    </div>
  )
}
