import React from 'react'
import './perfil.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUpload } from '@fortawesome/free-solid-svg-icons'

export default function Perfil() {
  return (
    <div className='screen-edicao-perfil'>
      <div className='container-botao-home'>
        <a href='/home/lobby' className='botao-home'>
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </div>
      <h2 id='titulo-secao-editar-perfil'>Edição de Perfil</h2>

      <div id='box-foto-perfil'>
        <FontAwesomeIcon icon={faUpload} id='icone-upload' />
        <p id='label-input-foto'>Foto de Perfil</p>
        <input id='input-link-foto' placeholder='http://pipipi.com/ppopopo.jpg'></input>
      </div>
      <input className='input-edicao-perfil' type='text' placeholder='Nome de Perfil'></input>
      <select id='select-edicao-perfil'>
        <option value="Amador">Amador</option>
        <option value="Entusiásta">Entusiásta</option>
        <option value="Cozinheiro">Cozinheiro</option>
        <option value="Chef">Chef</option>
      </select>
      <button id='botao-salvar-perfil'>Salvar</button>

    </div>
  )
}
