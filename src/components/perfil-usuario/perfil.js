import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './perfil.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDrumstickBite, faWheatAwn, faCandyCane, faMartiniGlassCitrus, faFishFins, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Card from '../home/card/card';
import Avatares from '../modal/avatares';
import avatar1 from '../media/avatar1.png';
import avatar2 from '../media/avatar2.png';
import avatar3 from '../media/avatar3.png';
import avatar4 from '../media/avatar4.png';
import avatar5 from '../media/avatar5.png';
import avatar6 from '../media/avatar6.png';

export default function Perfil() {

  const { idusuario } = useParams();
  const [usuario, setUsuario] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('all');
  const [recipes, setRecipes] = useState([]);
  const [filtroNome, setFiltroNome] = useState('');
  const [displayReceitasVisible, setDisplayReceitasVisible] = useState(false);
  const arrayFotos = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];


  const pesquisar = (e) => {
    fetchMyRecipes()
  }

  const toggleDisplayReceitas = () => {
    setDisplayReceitasVisible(!displayReceitasVisible);
  };

  async function fetchMyRecipes() {
    try {
      const response = await axios.get(`http://localhost:8800/my-recipes?userId=${usuario.id}&categoria=${categoriaSelecionada}`);
      if (response.status === 200) {
        const data = response.data;
        setRecipes(data);
      } else {
        throw new Error('Erro ao buscar receitas');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
        async function getAutor() {
            try {
                const response = await axios.put('http://localhost:8800/autor-receita', { autor: idusuario });
                if (response.status === 200) {
                    const data = response.data;
                    setUsuario(data);
                } else {
                    throw new Error('Erro ao buscar autor');
                }
            } catch (error) {
                console.error(error);
            }
        }
        getAutor();
}, [idusuario]);


  function handleInputChangeSearchBar(event) {
    const valorFiltro = event.target.value;
    setFiltroNome(valorFiltro);
  }

  const definirCategoria = (categoria) => {

    if (categoria === categoriaSelecionada) {
      setCategoriaSelecionada('all')
    } else {
      setCategoriaSelecionada(categoria)
    }
    fetchMyRecipes();
  }

  function mapReceitas(arr) {
    return arr.map((receita, index) => (<Card className='card-receita-minhas-receitas' key={index}
      foto={receita.foto}
      nome={receita.nome}
      categoria={receita.categoria}
      notas={receita.notas}
      idusuario={receita.idusuario}
      idreceita={receita.idreceitas}
    ></Card>))
  }

  function filtrarReceitas() {
    if (filtroNome.trim() === '') {

      return recipes;
    }
    return recipes.filter(receita => receita.nome.toLowerCase().includes(filtroNome.toLowerCase()));
  }

  return (
    <div id="card-perfil">

      <div className='container-botao-home-minhas-receitas'>
        <form className='box-barra-de-pesquisa' onSubmit={(e) => { pesquisar(e) }}>
          <input type='text' className='barra-de-pesquisa' placeholder='Bolo de Cenoura' onChange={handleInputChangeSearchBar}></input>
          <button className='botao-lupa' type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} className='icone-lupa' /></button>
        </form>
        <a href='/home/lobby' className='botao-home'>
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </div>

      <div id="card-usuario">
        <div id="display-avatar-usuario">
          <img src={arrayFotos[usuario.foto - 1]} id='avatar-usuario'></img>
        </div>
        <div id="info-card-usuario">
          <div id="info-section">
            <h6 className='subtitulo-card-usuario'>Nome de Usuario</h6>
            <h3 className='titulo-card-usuario'>{usuario.username}</h3>
          </div>
          <div id="info-section">
            <h6 className='subtitulo-card-usuario'>Experiência</h6>
            <h3 className='titulo-card-usuario'>{usuario.titulo}</h3>
          </div>
          <div id="info-section">
            <h6 className='subtitulo-card-usuario'>Receitas</h6>
            <h3 className='titulo-card-usuario'>{usuario.receitas ? usuario.receitas.length : "Contando"}</h3>
          </div>
        </div>

        <button id="botao-mostrar-receitas" onClick={toggleDisplayReceitas}>Receitas</button>
      </div>

      <div className={`display-receitas-usuario ${displayReceitasVisible ? '' : 'hidden'}`}>
        <div className='box-icones-categoria espacamento-top'>

          <div id='carnes' className='icone-categoria' onClick={() => definirCategoria('Carnes')}>
            <FontAwesomeIcon icon={faDrumstickBite} />
            <p className='nome-categoria-icone'>Carnes</p>
          </div>

          <div id='massas' className='icone-categoria' onClick={() => definirCategoria('Massas')}>
            <FontAwesomeIcon icon={faWheatAwn} />
            <p className='nome-categoria-icone'>Massas</p>
          </div>

          <div id='doces' className='icone-categoria' onClick={() => definirCategoria('Doces')}>
            <FontAwesomeIcon icon={faCandyCane} />
            <p className='nome-categoria-icone'>Doces</p>
          </div>

          <div id='bebidas' className='icone-categoria' onClick={() => definirCategoria('Bebidas')}>
            <FontAwesomeIcon icon={faMartiniGlassCitrus} />
            <p className='nome-categoria-icone'>Bebidas</p>
          </div>

          <div id='peixes' className='icone-categoria' onClick={() => definirCategoria('Peixes')}>
            <FontAwesomeIcon icon={faFishFins} />
            <p className='nome-categoria-icone'>Peixes</p>
          </div>

        </div>

        <div id='secao-titulo espacamento-top'>
          <p className='titulo-minhas-receitas'>Receitas</p>
        </div>

        <div id="display-das-receitas" className="display-receitas tamanho-display-receitas-usuario">
          {mapReceitas(filtrarReceitas())}
        </div>
      </div>
    </div>
  )
}
