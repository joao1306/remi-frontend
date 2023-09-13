import React from 'react';
import './cadastroReceita.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faTrash, faHouse } from '@fortawesome/free-solid-svg-icons'

export default function CadastroReceita() {
  return (
    <div className='form-receita'>
      <div className='container-botao-home'>
        <a href='/home/lobby' className='botao-home'>
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </div>
      <form className='form-container'>
      <h2 className='titulo-formulario-receita'>Cadastro de Receita</h2>

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
              <FontAwesomeIcon icon={faCirclePlus} className='botao-ingrediente' />
            </div>

            <div className='container-ingredientes'>

              <div className='box-ingrediente'>
                <p className='nome-ingrediente'>Carne Bovina</p>
                <button className='botao-lixeira'><FontAwesomeIcon icon={faTrash} className='icone-lixeira' /></button>
              </div>

              <div className='box-ingrediente'>
                <p className='nome-ingrediente'>Carne Bovina</p>
                <button className='botao-lixeira'><FontAwesomeIcon icon={faTrash} className='icone-lixeira' /></button>
              </div>

              <div className='box-ingrediente'>
                <p className='nome-ingrediente'>Carne Bovina</p>
                <button className='botao-lixeira'><FontAwesomeIcon icon={faTrash} className='icone-lixeira' /></button>
              </div>

              <div className='box-ingrediente'>
                <p className='nome-ingrediente'>Carne Bovina</p>
                <button className='botao-lixeira'><FontAwesomeIcon icon={faTrash} className='icone-lixeira' /></button>
              </div>

              <div className='box-ingrediente'>
                <p className='nome-ingrediente'>Carne Bovina</p>
                <button className='botao-lixeira'><FontAwesomeIcon icon={faTrash} className='icone-lixeira' /></button>
              </div>

              <div className='box-ingrediente'>
                <p className='nome-ingrediente'>Carne Bovina</p>
                <button className='botao-lixeira'><FontAwesomeIcon icon={faTrash} className='icone-lixeira' /></button>
              </div>

            </div>


          </div>
        </div>

        <div className='adicionar-passo'>
          <input type='text' className='input-passo' placeholder='Passo da Receita | Ex.: Cortar em cubinhos e cozinhar por 3 minutos...'></input>
          <FontAwesomeIcon icon={faCirclePlus} className='botao-passo' />
        </div>
        <div className='line-passos'></div>

        <div className='box-passo'>
          <div className='display-ordinal'>
            <p className='numero-passo'>1</p>
          </div>
          <p className='texto-passo'>Cortar em cubinhos de 2 a 3 centímetros cúbicos</p>
          <button className='delete-passo'><FontAwesomeIcon icon={faTrash} className='icone-lixeira-passo' /></button>
        </div>

        <div className='box-passo'>
          <div className='display-ordinal'>
            <p className='numero-passo'>2</p>
          </div>
          <p className='texto-passo'>Cozinhar por 5 minutos em água fervente</p>
          <button className='delete-passo'><FontAwesomeIcon icon={faTrash} className='icone-lixeira-passo' /></button>
        </div>

        <div className='box-passo'>
          <div className='display-ordinal'>
            <p className='numero-passo'>3</p>
          </div>
          <p className='texto-passo'>Misturar com molho</p>
          <button className='delete-passo'><FontAwesomeIcon icon={faTrash} className='icone-lixeira-passo' /></button>
        </div>

        <div className='container-botao-enviar'>
          <button className='botao-enviar-formulario'>
            Salvar
          </button>
        </div>

      </form>
    </div>
  )
}
