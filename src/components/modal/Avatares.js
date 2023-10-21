import React, { useState } from 'react'
import './avatares.css';
import axios from 'axios'
import avatar1 from '../media/avatar1.png';
import avatar2 from '../media/avatar2.png';
import avatar3 from '../media/avatar3.png';
import avatar4 from '../media/avatar4.png';
import avatar5 from '../media/avatar5.png';
import avatar6 from '../media/avatar6.png';

export default function Avatares({ onClose }) {

  const usuarioLogado = JSON.parse(localStorage.getItem('loggedUser'));

  
  const [fotoAtual, setFotoAtual] = useState(usuarioLogado.foto)
  
  const arrayFotos = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  
  
  
  //Codigo responsável por persistir a foto escolhida no banco de dados.
  const persistirFoto = async (e) => {
    e.preventDefault();
    const usuarioLogado = JSON.parse(localStorage.getItem('loggedUser'));
    const fotoEscolhida = { foto: e.target.getAttribute('data-id'), idUsuario: usuarioLogado.id };
  
    try {
      const response = await axios.put("http://localhost:8800/selecionar-foto", fotoEscolhida);
  
      if (response.status === 200) {
        console.log("Foto selecionada com sucesso!");
        usuarioLogado.foto = fotoEscolhida.foto;
        localStorage.setItem('loggedUser', JSON.stringify(usuarioLogado));
        console.log(usuarioLogado)
      } else {
        console.log('Persistência falhou:', response.data.message);
        alert("Sinto muito, há algum problema com os dados.");
      }
    } catch (error) {
      console.log(error.response.data);
      alert("Sinto muito, algo não está certo.");
    }
  };
  
  


  return (
    <div id='modal-avatares'>
      <div id='box-icones-avatares'>
        <div className='icone-avatar'>
          <img src={avatar1} className='avatar' data-id='1' onClick={persistirFoto}></img>
        </div>
        <div className='icone-avatar'>
          <img src={avatar2} className='avatar' data-id='2' onClick={persistirFoto}></img>
        </div>
        <div className='icone-avatar'>
          <img src={avatar3} className='avatar' data-id='3' onClick={persistirFoto}></img>
        </div>
        <div className='icone-avatar'>
          <img src={avatar4} className='avatar' data-id='4' onClick={persistirFoto}></img>
        </div>
        <div className='icone-avatar'>
          <img src={avatar5} className='avatar' data-id='5' onClick={persistirFoto}></img>
        </div>
        <div className='icone-avatar'>
          <img src={avatar6} className='avatar' data-id='6' onClick={persistirFoto}></img>
        </div>
      </div>
      <button id='botao-sair-modal-avatares' onClick={onClose}>Pronto!</button>
    </div>
  )
}
