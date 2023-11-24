import React, { useState, useEffect } from 'react';
import './home.css';
import Sidebar from './sidebar/sidebar';
import Receita from '../receita/Receita';
import Perfil from './edicao-perfil/Perfil';
import Categoria from './categoria/categoria';
import Card from './card/card';
import CadastroReceita from './cadastro-receita/CadastroReceita';
import Favoritas from './favoritas/favoritas';
import axios from 'axios';
import Lobby from './lobby/lobby';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MinhasReceitas from './minhas-receitas/MinhasReceitas';
import PerfilUsuario from '../perfil-usuario/perfil';
import ilustracao from '../media/ilustracaomobile.png';
import logo from '../media/logoremibranca.png';

export default function Home() {

  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes() {
    try {
      const response = await axios.get('http://localhost:8800/recipes');
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

  fetchRecipes();

  function mapReceitas(arr) {
    return arr.map((receita, index) => (<Card key={index}
      foto={receita.foto}
      nome={receita.nome}
      categoria={receita.categoria}
      notas={receita.notas}
    ></Card>))
  }

  return (
    <div className='screen'>
      <div id='mobile-warning'>
        <img src={logo} id="logo-remi-branca"/>
        <img src={ilustracao} id='ilustracao-mobile'/>
        <p id="aviso-mobile">A versão <b>mobile</b> já está no forno!</p>
      </div>
      <Sidebar></Sidebar>
      <div className='conteudo-home'>
          <Routes>
            <Route path='/lobby' element={<Lobby/>}/>
            <Route path='/cadastro-receita' element={<CadastroReceita/>}/>
            <Route path='/minhas-receitas' element={<MinhasReceitas/>}/>
            <Route path='/melhores-receitas' element={''}/>
            <Route path='/editar-perfil' element={<Perfil/>}/>
            <Route path='/receita/:id' element={<Receita/>}/>
            <Route path='/perfil/:idusuario' element={<PerfilUsuario/>}/>
            <Route path='/favoritas' element={<Favoritas/>}/>
          </Routes>

      </div>
    </div>
  )
}


