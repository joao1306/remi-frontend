import React from 'react';
import './cadastroReceita.css';
import Sidebar from '../sidebar/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function CadastroReceita() {
  return (
    <div className='form-receita'>
      <h2 className='titulo-formulario-receita'>Cadastro de Receita</h2>
      <form className='form-container'>

        {/* bloco superior do formulario (nome, descricao, link, categoria e ingredientes) */}
        <div className='bloco-superior'>
          <div className='bloco-esquerdo'>
            <input type='text' placeholder='Nome da Receita' className='input-bloco-superior-esquerdo'></input>
            <textarea className='text-area' placeholder='Descrição aqui'></textarea>
            <div className='box-nome-categoria'>
              <input type='text' placeholder='Cole o link de uma foto aqui' className='input-bloco-superior-esquerdo-link'></input>
              <select className='select-categoria'>
                <option value="Carnes">Carnes</option>
                <option value="Massas">Massas</option>
                <option value="Doces">Doces</option>
                <option value="Peixes">Peixes</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </div>
          </div>
          <div className='bloco-direito'>
            <div className='box-persistencia-ingrediente'>
              <input className='input-ingrediente' placeholder='Adicione os ingredientes aqui.'></input>
              <FontAwesomeIcon icon={faCirclePlus} className='botao-ingrediente'/>
            </div>
          </div>
        </div>

        <div className='adicionar-passo'>
          <input type='text' className='input-passo' placeholder='Cortar em cubinhos'></input>
          <FontAwesomeIcon icon={faCirclePlus} className='botao-passo'/>
        </div>
        <div className='line-passos'></div>


      </form>
    </div>
  )
}
