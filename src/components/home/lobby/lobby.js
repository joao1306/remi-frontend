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

                    <Categoria img='https://static.vecteezy.com/system/resources/previews/024/320/541/non_2x/delicious-barbecued-spare-ribs-tasty-bbq-meat-isolated-on-transparent-background-generate-ai-free-png.png' cor='laranja' titulo='Carnes'></Categoria>

                    <Categoria img='https://combrasil.com/wp-content/uploads/2022/11/lamen-carne-72-2.png' cor='vermelho' titulo='Massas'></Categoria>

                    <Categoria img='https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112651/20412_fotos_23-sodie_bolo_inteiro_540x400px23.png' cor='rosa' titulo='Doces'></Categoria>

                    <Categoria img='https://almmediaprod.s3.me-south-1.amazonaws.com/BrandCategoryMapping/juices8162022100235AM.png' cor='verde' titulo='Bebidas'></Categoria>

                    <Categoria img='https://static.wixstatic.com/media/4c4a08_4dc1b11fddd84be2ac282ded5d6a994d~mv2.png/v1/fill/w_598,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Novo%20Combo%20P%20Compartilhar%20Dueto%20IFOOD%201200x900px.png' cor='azul' titulo='Peixes'></Categoria>

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
