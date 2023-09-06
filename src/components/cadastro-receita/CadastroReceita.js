import React from 'react';
import './cadastroReceita.css';
import Sidebar from '../home/sidebar/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function CadastroReceita() {
  return (
    <div className='screen'>
      <Sidebar></Sidebar>
      <div className='conteudo-home'>

        <div className='box-barra-de-pesquisa'>
          <input type='text' className='barra-de-pesquisa' placeholder='Bolo de Cenoura'></input>
          <button className='botao-lupa'><FontAwesomeIcon icon={faMagnifyingGlass} className='icone-lupa'/></button>
        </div>
      </div>
    </div>
  )
}
