import React, { useState } from 'react';
import './perfil.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPencil } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import fotoPerfil from '../../media/avatar5.png';
import Avatares from '../../modal/Avatares';
import avatar1 from '../../media/avatar1.png';
import avatar2 from '../../media/avatar2.png';
import avatar3 from '../../media/avatar3.png';
import avatar4 from '../../media/avatar4.png';
import avatar5 from '../../media/avatar5.png';
import avatar6 from '../../media/avatar6.png';

export default function Perfil() {

  const usuarioLogado = JSON.parse(localStorage.getItem('loggedUser'));
  const indexAvatarUsuarioLogado = parseInt(usuarioLogado.foto) - 1;
  const fotos = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

  const [user, setUser] = useState({ id: usuarioLogado.id, username: usuarioLogado.username, titulo: 'Amador' });
  const [modalAvatarOpen, setModalAvatarOpen] = useState(false);

  const openModalAvatar = () => {
    setModalAvatarOpen(true);
}


const closeModalAvatar = () => {
    setModalAvatarOpen(false);
}


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const salvarDadosDeUsuario = async (e) => {
    e.preventDefault();

    console.log(user)

    try {
      const response = await axios.put("http://localhost:8800/alterar-dados-de-usuario", user);

      if (response.status === 200) {
        alert('Usuário editado com sucesso!');

      } else { 
        alert('algo não deu certo :(')
      }

    }
    catch (error) {
      console.log(error.response.data);
      alert("Sinto muito, algo deu errado");
    }
  };

  return (
    <div className='screen-edicao-perfil'>
      <div className='container-botao-home' id='box-botao-home'>
        <a href='/home/lobby' className='botao-home'>
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </div>
      <h2 id='titulo-secao-editar-perfil'>Edição de Perfil</h2>

      <div id='card-edicao-perfil'>
        <div id='box-foto-perfil'>
          <button id='botao-avatar' onClick={() => openModalAvatar()}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <img src={fotos[indexAvatarUsuarioLogado]} id='avatar-perfil'></img>
        </div>
        <div id='info-edicao-perfil'>
          <div id='div-inputs'>
            <input className='input-edicao-perfil' type='text' placeholder='Nome de Perfil' name='username' onChange={handleInputChange}></input>
            <select id='select-edicao-perfil' name='titulo' onChange={handleInputChange}>
              <option value="Amador">Amador</option>
              <option value="Entusiásta">Entusiásta</option>
              <option value="Cozinheiro">Cozinheiro</option>
              <option value="Chef">Chef</option>
            </select>
          </div>
          <div id='div-botao-salvar'>
            <button id='botao-salvar-perfil' onClick={salvarDadosDeUsuario}>Salvar</button>
          </div>
          {modalAvatarOpen && (<Avatares onClose={closeModalAvatar}/>)}
        </div>
      </div>
    </div>
  )
}
