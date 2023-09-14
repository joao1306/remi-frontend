import React, {useContext} from 'react';
import './saudacao.css';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext'

export default function Saudacao() {

  const {auth} = useContext(AuthContext);

  const usuarioLogado = JSON.parse(localStorage.getItem('loggedUser'));

  return (
    <div className='background-saudacao'>
      <div>
          <p className='texto-saudacao'>Olá, <b>{usuarioLogado.username}</b>!</p>
          <Link to='/home/lobby'><button className='saudar'>Olá!</button></Link>
      </div>
    </div>
  )
}
