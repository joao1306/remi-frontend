import React, { useState } from 'react';
import './ingredientes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Ingredientes({ ingredientes, onClose, nome }) {

    console.log(ingredientes)

    const toggleOpacityClass = (index) => {
        const parentDiv = document.getElementById(`ingrediente-${index}`);
        if (parentDiv) {
          parentDiv.classList.toggle('checked'); // toggle() adiciona ou remove a classe conforme a sua presença
        }
      };
    
        function mapIngredientes(arr) {
            return arr.map((ingrediente, index) => (

                <div className='ingrediente-display-ingredientes' >

                    <p>{ingrediente}</p>
                    <button className='botao-checkar-ingrediente' onClick={() => toggleOpacityClass(index)} id={`ingrediente-${index}`}>
                        <FontAwesomeIcon icon={faCheck} className='checkar-ingrediente' />
                    </button>

                </div>

            ))
        }

        return (
            <div className='container-externo-modal'>
                <div className='container-ingredientes-receita'>
                    <button id='fechar-modal' onClick={onClose}><FontAwesomeIcon icon={faX} /></button>
                    <h2 id='titulo-ingredientes'>{nome}</h2>
                    <div id='display-ingredientes'>
                        {mapIngredientes(ingredientes)}
                    </div>
                    <button onClick={onClose} id='botao-tudo-pronto'>Tudo pronto!</button>
                </div>
            </div>
        )
    }
