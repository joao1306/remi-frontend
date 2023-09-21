import React from 'react'
import './minhasreceitas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function MinhasReceitas() {
    return (
        <div id='minhas-receitas'>
            <div className='container-botao-home-minhas-receitas'>
                <a href='/home/lobby' className='botao-home'>
                    <FontAwesomeIcon icon={faHouse} />
                </a>
            </div>
        </div>
    )
}
