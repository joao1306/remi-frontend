import React from 'react'
import './avatares.css';

export default function Avatares() {
  return (
    <div id='modal-avatares'>
        <div id='box-icones-avatares'>
            <div className='icone-avatar'></div>
            <div className='icone-avatar'></div>
            <div className='icone-avatar'></div>
            <div className='icone-avatar'></div>
            <div className='icone-avatar'></div>
            <div className='icone-avatar'></div>
        </div>
        <button id='botao-sair-modal-avatares'>Pronto!</button>
    </div>
  )
}
