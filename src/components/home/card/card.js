import React, { useState, useEffect } from 'react'
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import avatar1 from '../../media/avatar1.png';
import avatar2 from '../../media/avatar2.png';
import avatar3 from '../../media/avatar3.png';
import avatar4 from '../../media/avatar4.png';
import avatar5 from '../../media/avatar5.png';
import avatar6 from '../../media/avatar6.png';

export default function Card(prop) {
  
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState([]);

  const indexAvatarAutor = parseInt(user.foto) - 1;
  const fotos = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];


  function mediaNotas(arr) {
    let somaNotas = 0;
    const notas = JSON.parse(arr)

    notas.map((nota) => {
      somaNotas = somaNotas + parseFloat(nota, 10);
    });

    const numeroDeNotas = notas.length;
    const media = somaNotas / numeroDeNotas;
    const mediaFormatada = media.toFixed(2);
    const mediaString = mediaFormatada.toString().replace(/(\.0*|(?<=(\..*[^0]))0*)$/, '');

    return mediaString;
  }

  {/* código responsável por resgatar o usuario que escreveu a receita */ }

  useEffect(() => {
    async function fetchAutor() {
      try {
        const response = await axios.put('http://localhost:8800/autor-receita', { autor: prop.idusuario });
        if (response.status === 200) {
          const data = response.data;
          setUser(data);
        } else {
          throw new Error('Erro ao buscar Usuario');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchAutor();
  }, []);


  {/* codigo responsável por direcionar o usuário para a página da receita */ }
  const irParaReceita = () => {
    navigate(`/home/receita/${prop.idreceita}`)
  }

  {/* codigo responsável por direcionar o usuário para a página de perfil do usuário */ }
  const irParaUsuario = () => {
    navigate(`/home/perfil/${user.id}`)
  }

  return (

    <div className='card-box'>
      <div className='display-foto'>
        <img src={prop.foto} className='foto-card' alt="foto-card"/>
      </div>

      <div className='box-titulo-subtitulo'>
        <h2 className='titulo-card'>{prop.nome}</h2>
        <h4 className='subtitulo-card'>{prop.categoria}</h4>
      </div>

      <div className='box-perfil-nota'>

        <div className='display-foto-perfil' onClick={irParaUsuario}>
          <img src={fotos[indexAvatarAutor]} className='foto-perfil-card' alt="foto-perfil-card"/>
        </div>

        <div className='box-nome-titulo' onClick={irParaUsuario}>
          <h2 className='nome-usuario'>{user.username}</h2>
          <h4 className='titulo-usuario'>{user.titulo}</h4>
        </div>

        <div className='box-nota'>
          <FontAwesomeIcon icon={faStar} className='icone-estrela' />
          <h3 className='nota'>{mediaNotas(prop.notas)}</h3>
        </div>


      </div>

      <button className='botao-card' onClick={irParaReceita}>Vamos lá!</button>

    </div>
  )
}
