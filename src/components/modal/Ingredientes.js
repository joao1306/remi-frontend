import React, {useState} from 'react';
import './ingredientes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Ingredientes({ ingredientes, onClose }) {
    


    return (
        <div className='container-externo-modal'>
            <div className='container-ingredientes-receita'>
                <button id='fechar-modal' onClick={onClose}><FontAwesomeIcon icon={faX} /></button>
                <h2 id='titulo-ingredientes'>Ingredientes</h2>
                <div id='display-ingredientes'>

                </div>
            </div>
        </div>
    )
}
