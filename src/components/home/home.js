import React, { useState, useEffect } from 'react';
import './home.css';
import Sidebar from './sidebar/sidebar';
import Receita from '../receita/Receita';
import Categoria from './categoria/categoria';
import Card from './card/card';
import CadastroReceita from './cadastro-receita/CadastroReceita';
import axios from 'axios';
import Lobby from './lobby/lobby';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      <Sidebar></Sidebar>
      <div className='conteudo-home'>
          <Routes>
            <Route path='/lobby' element={<Lobby/>}/>
            <Route path='/cadastro-receita' element={<CadastroReceita/>}/>
            <Route path='/melhores-receitas' element={''}/>
            <Route path='/editar-perfil' element={''}/>
            <Route path='/receita' element={<Receita/>}/>
          </Routes>

      </div>
    </div>
  )
}


