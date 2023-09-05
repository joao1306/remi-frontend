import React, {useContext} from 'react';
import './saudacao.css';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext'

export default function Saudacao() {

  const {auth} = useContext(AuthContext);

  return (
    <div className='background-saudacao'>
      <div>
          <p className='texto-saudacao'>Olá, <b>{auth}</b>!</p>
          <Link to='/home'><button className='saudar'>Olá!</button></Link>
      </div>
    </div>
  )
}
