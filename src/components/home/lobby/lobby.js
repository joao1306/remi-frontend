import React, { useState, useEffect } from 'react';
import '../home.css';
import Categoria from '../categoria/categoria'
import Card from '../card/card'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Lobby() {

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
            idusuario={receita.idusuario}
            idreceita={receita.idreceitas}
        ></Card>))
    }

    return (
        <div className='conteudo-home'>

            <div className='box-barra-de-pesquisa'>
                <input type='text' className='barra-de-pesquisa' placeholder='Bolo de Cenoura'></input>
                <button className='botao-lupa'><FontAwesomeIcon icon={faMagnifyingGlass} className='icone-lupa' /></button>
            </div>

            <div className='box-titulo-secao'>
                <h2 className='texto-titulo-secao'>Categorias</h2>
            </div>

            <div className='sec-categorias'>
                <div className='box-categorias'>

                    <Categoria img='https://supermercadosrondon.com.br/guiadecarnes/images/postagens/as_7_melhores_carnes_para_churrasco_21-05-2019.jpg' cor='laranja' titulo='Carnes'></Categoria>

                    <Categoria img='https://www.receiteria.com.br/wp-content/uploads/receitas-de-massas-0.jpg' cor='vermelho' titulo='Massas'></Categoria>

                    <Categoria img='https://vitat.com.br/receitas/images/recipeshandler.jpg?id=80707&tipo=r&default=s' cor='rosa' titulo='Doces'></Categoria>

                    <Categoria img='https://receitinhas.com.br/wp-content/uploads/2017/09/Passion-Fruit-Juice.jpg' cor='verde' titulo='Bebidas'></Categoria>

                    <Categoria img='https://img.freepik.com/fotos-gratis/prato-de-frutos-do-mar-frescos-com-sashimi-de-sushi-e-wasabi-gerado-por-ia_188544-14075.jpg?w=2000' cor='azul' titulo='Peixes'></Categoria>

                </div>
            </div>

            <div className='box-titulo-secao'>
                <h2 className='texto-titulo-secao'>Melhores Receitas</h2>
            </div>

            <div className='box-receitas'>
                {mapReceitas(recipes)}
            </div>
        </div>
    )
}
