import React, { useState } from 'react'
import './cadastro.css'
import logoremi from './logoremi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


export default function Cadastro() {

  const [user, setUser] = useState({ username: '', senha: '', senharep: ''});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };


  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8800/cadastro", user);

      if(response.status === 200) {
       
        alert("Usuário cadastrado com sucesso!");
      }
        else {
          console.log('Persistência falhou:', response.data.message);
          alert("Sinto muito, há algum problema com os dados.");
        }

    } catch (error) {
      console.log(error.response.data);
      alert("Sinto muito, algo não está certo.");
    }
  };


  return (
    <div className='background-cadastro'>
      <div className='login-box'>
        <form className='login-form' onSubmit={onSubmit}>
          <img src={logoremi} className='logo-login' alt="logo"/>
          <div className='input-box-login'>
            <input type='text' placeholder='Usuário' className='input-login' value={user.username} name='username' onChange={handleInputChange}/>
            <FontAwesomeIcon icon={faUser} className='icone-login-box'/>
          </div>
          <div className='input-box-login'>
            <input type='password' placeholder='Senha' className='input-senha' value={user.senha} name='senha' onChange={handleInputChange}/>
            <FontAwesomeIcon icon={faLock} className='icone-login-box'/>
          </div>
          <div className='input-box-login'>
            <input type='password' placeholder='Repita a senha' className='input-senha' value={user.senharep} name='senharep' onChange={handleInputChange}/>
            <FontAwesomeIcon icon={faLock} className='icone-login-box'/>
          </div>
          <div className='lembrar'>
            <input type='checkbox' className='checkbox'></input>
            <p className='login-text'>Lembre-se de mim!</p>
          </div>
          <button type='submit' className='botao-entrar'>Cadastrar</button>
          <a href='/login'><FontAwesomeIcon icon={faArrowLeft} className='voltar'/></a>
        </form>
      </div>
    </div>
  )
}
