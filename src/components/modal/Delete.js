import React, { useState } from 'react';
import './delete.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

export default function Delete({ id, onClose}) {

    const navigate = useNavigate();

    async function delRecipe() {
        try {
            const response = await axios.delete(`http://localhost:8800/deletar-receita?recipeId=${id}`);
            if (response.status === 200) {
                console.log('Deletada com sucesso!')
                navigate('/home/minhas-receitas')
            } else {
                throw new Error('Erro ao deletar receita.');
            }
        } catch (error) {
            console.error(error);
        }
    }


        return (
            <div className='container-externo-modal'>
                <div className='container-delete'>
                    <button id='fechar-modal-delete' onClick={onClose}><FontAwesomeIcon icon={faX} /></button>
                    <div className='display-aviso-delecao'>
                        <div id='display-trash'>
                            <FontAwesomeIcon icon={faTrash} id='icone-aviso'/>
                        </div>
                        <p id='texto-aviso'>Tem certeza de que deseja excluir a receita?</p>
                        <button id='botao-confirmar-delete' onClick={() => {delRecipe()}}>Excluir</button>
                    </div>
                </div>
            </div>
        )
    }
