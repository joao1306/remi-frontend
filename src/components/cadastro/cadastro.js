import React from 'react'
import './cadastro.css'
import logoremi from './logoremi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons'





export default function Cadastro() {
  return (
    <div className='background-cadastro'>
      <div className='login-box'>
        <form className='login-form'>
          <img src={logoremi} className='logo-login'></img>
          <div className='input-box-login'>
            <input type='text' placeholder='Usuário' className='input-login'/>
            <FontAwesomeIcon icon={faUser} className='icone-login-box'/>
          </div>
          <div className='input-box-login'>
            <input type='password' placeholder='Senha' className='input-senha'/>
            <FontAwesomeIcon icon={faLock} className='icone-login-box'/>
          </div>
          <div className='input-box-login'>
            <input type='password' placeholder='Repita a senha' className='input-senha'/>
            <FontAwesomeIcon icon={faLock} className='icone-login-box'/>
          </div>
          <div className='lembrar'>
            <input type='checkbox' className='checkbox'></input>
            <p className='login-text'>Lembre-se de mim!</p>
          </div>
          <button type='submit' className='botao-entrar'>Entrar</button>
          <a href='/login'><FontAwesomeIcon icon={faArrowLeft} className='voltar'/></a>
        </form>
      </div>
    </div>
  )
}
