import React, { useState } from 'react'
import axios from 'axios'
import Card from '../card/card'
import './minhasreceitas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faDrumstickBite, faWheatAwn, faCandyCane, faMartiniGlassCitrus, faFishFins, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function MinhasReceitas() {

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
        return arr.map((receita, index) => (<Card className='card-receita-minhas-receitas' key={index}
            foto={receita.foto}
            nome={receita.nome}
            categoria={receita.categoria}
            notas={receita.notas}
            idusuario={receita.idusuario}
            idreceita={receita.idreceitas}
        ></Card>))
    }

    return (
        <div id='minhas-receitas'>

            <div className='container-botao-home-minhas-receitas'>
                <div className='box-barra-de-pesquisa'>
                    <input type='text' className='barra-de-pesquisa' placeholder='Bolo de Cenoura'></input>
                    <button className='botao-lupa'><FontAwesomeIcon icon={faMagnifyingGlass} className='icone-lupa' /></button>
                </div>
                <a href='/home/lobby' className='botao-home'>
                    <FontAwesomeIcon icon={faHouse} />
                </a>
            </div>



            <div className='box-icones-categoria'>

                <div id='carnes' className='icone-categoria'>
                    <FontAwesomeIcon icon={faDrumstickBite} />
                    <p className='nome-categoria-icone'>Carnes</p>
                </div>

                <div id='massas' className='icone-categoria'>
                    <FontAwesomeIcon icon={faWheatAwn} />
                    <p className='nome-categoria-icone'>Massas</p>
                </div>

                <div id='doces' className='icone-categoria'>
                    <FontAwesomeIcon icon={faCandyCane} />
                    <p className='nome-categoria-icone'>Doces</p>
                </div>

                <div id='bebidas' className='icone-categoria'>
                    <FontAwesomeIcon icon={faMartiniGlassCitrus} />
                    <p className='nome-categoria-icone'>Bebidas</p>
                </div>

                <div id='peixes' className='icone-categoria'>
                    <FontAwesomeIcon icon={faFishFins} />
                    <p className='nome-categoria-icone'>Peixes</p>
                </div>

            </div>

            <div id='secao-titulo'>
                <p className='titulo-minhas-receitas'>Minhas Receitas</p>
            </div>

            <div className='display-receitas'>
                {mapReceitas(recipes)}
            </div>

        </div>
    )
}
