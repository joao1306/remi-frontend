import './login.css'
import logoremi from './logoremi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext'


export default function Login() {

  const navigate = useNavigate();

  const {auth, setAuth} = useContext(AuthContext);
    
  const [user, setUser] = useState({ username: '', senha: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("http://localhost:8800/login", user);

      if(response.status === 200) {
        
        if (response.data.username) {
          console.log('Usuário autenticado com sucesso', response.data);
          setAuth(response.data.username);
          console.log(response.data.username);
          navigate('/saudacao');
        } else {
          console.log('Autenticação falhou:', response.data.message);
          alert("Sinto muito, senha ou login inválidos.");
        }
        } else {
          console.log('Algo deu errado durante a autenticação');
        }

    } catch (error) {
      console.log(error.response.data);
      alert("Sinto muito, senha ou login inválidos.");
    }
  };

  
  return (
    <div className='background-login'>
      <div className='login-box'>
        <form className='login-form' onSubmit={onSubmit}>
          <img src={logoremi} className='logo-login'></img>
          <div className='input-box-login'>
            <input type='text' placeholder='Usuário' className='input-login' value={user.username} name='username' onChange={handleInputChange}/>
            <FontAwesomeIcon icon={faUser} className='icone-login-box'/>
          </div>
          <div className='input-box-login'>
            <input type='password' placeholder='Senha' className='input-senha' value={user.senha} name='senha' onChange={handleInputChange}/>
            <FontAwesomeIcon icon={faLock} className='icone-login-box'/>
          </div>
          <div className='lembrar'>
            <input type='checkbox' className='checkbox'></input>
            <p className='login-text'>Lembre-se de mim!</p>
          </div>
          <button type='submit' className='botao-entrar'>Entrar</button>
          <p className='login-text'>Novo por aqui? <a href='/cadastro' className='login-text link-cadastro'> <b>Cadastre-se!</b></a></p>
        </form>
      </div>
    </div>
  )
}