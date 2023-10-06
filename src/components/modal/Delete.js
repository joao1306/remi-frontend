import React, { useState } from 'react';
import './delete.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Delete({ id, onClose}) {

        return (
            <div className='container-externo-modal'>
                <div className='container-delete'>
                    <button id='fechar-modal-delete' onClick={onClose}><FontAwesomeIcon icon={faX} /></button>
                    <div className='display-aviso-delecao'>
                        <div id='display-trash'>
                            <FontAwesomeIcon icon={faTrash} id='icone-aviso'/>
                        </div>
                        <p id='texto-aviso'>Tem certeza de que deseja excluir a receita?</p>
                        <button id='botao-confirmar-delete'>Excluir</button>
                    </div>
                </div>
            </div>
        )
    }
