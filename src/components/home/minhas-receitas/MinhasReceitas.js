import React, { useState } from 'react'
import axios from 'axios'
import Card from '../card/card'
import './minhasreceitas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faDrumstickBite, faWheatAwn, faCandyCane, faMartiniGlassCitrus, faFishFins, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function MinhasReceitas() {

    const [recipes, setRecipes] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('all');
    const [pesquisa, setPesquisa] = useState('');
    const usuarioLogado = JSON.parse(localStorage.getItem('loggedUser'));
    
    
    async function fetchMyRecipes() {
        try {
            const response = await axios.get(`http://localhost:8800/my-recipes?userId=${usuarioLogado.id}&categoria=${categoriaSelecionada}`);
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
    
    fetchMyRecipes();
    
    const definirCategoria = (categoria) => {

        if(categoria === categoriaSelecionada){
            setCategoriaSelecionada('all')
        }else{
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

    const definirPesquisa = (e) => {
        const valor = e.target.value;
        setPesquisa(valor);
    }

    const pesquisar = (e) => {
        fetchMyRecipes()
    }

    return (
        <div id='minhas-receitas'>

            <div className='container-botao-home-minhas-receitas'>
                <form className='box-barra-de-pesquisa' onSubmit={(e) => {pesquisar(e)}}>
                    <input type='text' className='barra-de-pesquisa' placeholder='Bolo de Cenoura' onChange={(e) => {definirPesquisa(e)}}></input>
                    <button className='botao-lupa' type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} className='icone-lupa' /></button>
                </form>
                <a href='/home/lobby' className='botao-home'>
                    <FontAwesomeIcon icon={faHouse} />
                </a>
            </div>



            <div className='box-icones-categoria'>

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

            <div id='secao-titulo'>
                <p className='titulo-minhas-receitas'>Minhas Receitas</p>
            </div>

            <div className='display-receitas'>
                {mapReceitas(recipes)}
            </div>

        </div>
    )
}
