import React, { useState, useEffect } from 'react';
import './receita.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Receita() {

    const [recipe, setRecipe] = useState([]);
    const [autor, setAutor] = useState([]);
    const { id } = useParams();


    // Código que acessa a receita pelo id
    useEffect(() => {
        async function getRecipe() {
            try {
                const response = await axios.put('http://localhost:8800/getRecipeById', { idDaReceita: id });
                if (response.status === 200) {
                    const data = response.data;
                    setRecipe(data);
                } else {
                    throw new Error('Erro ao buscar receita');
                }
            } catch (error) {
                console.error(error);
            }
        }

        getRecipe();
    }, [id]);

    // Código que acessa o autor pelo id
    useEffect(() => {
        if (recipe.length > 0) {
            async function getAutor() {
                try {
                    const response = await axios.put('http://localhost:8800/autor-receita', { autor: recipe[0].idusuario });
                    if (response.status === 200) {
                        const data = response.data;
                        setAutor(data);
                    } else {
                        throw new Error('Erro ao buscar autor');
                    }
                } catch (error) {
                    console.error(error);
                }
            }

            getAutor();
        }
    }, [recipe]);

    if (recipe.length === 0 || autor.length === 0) {
        return <div>Carregando...</div>;
    }

    {/* codigo responsável pela renderização da lista de etapas(passos) da receita */ }
    const mapPassos = (arrPassos) => {
        return arrPassos.map((passo, index) => (

            <div className='box-passo-receita'>

                <div className='display-ordinal'>
                    <p className='numero-passo'>{index + 1}</p>
                </div>

                <p className='texto-passo'>{passo}</p>

            </div>

        ))

    }


    function mediaNotas(arr) {
        let somaNotas = 0;
        const notas = JSON.parse(arr)
    
        notas.map((nota) => {
          somaNotas = somaNotas + parseFloat(nota, 10);
        });
    
        const numeroDeNotas = notas.length;
        const media = somaNotas / numeroDeNotas;
    
        return media;
      }


    return (

        <div className='screen-receita'>

            <div className='container-botao-home'>
                <a href='/home/lobby' className='botao-home'>
                    <FontAwesomeIcon icon={faHouse} />
                </a>
            </div>

            <div className='bloco-superior-receita'>
                <div className='display-foto-receita'>
                    <img className='foto-receita' src={recipe[0].foto}></img>
                </div>
                <div className='bloco-info-receita'>
                    <div className='nome-nota-receita'>
                        <div id='box-titulo-receita'>
                            <h2 id='nome-receita'>{recipe[0].nome}</h2>
                            <p id='subtitulo-receita'>{recipe[0].categoria}</p>
                        </div>
                        <div id='avaliacao'>
                            <FontAwesomeIcon icon={faStar} id='icone-estrela-receita' />
                            <p id='nota'>{mediaNotas(recipe[0].notas)}</p>
                        </div>
                    </div>
                    <p className='texto-descricao-receita'>{recipe[0].descricao}</p>
                    <div id='bloco-perfil-botao-ingredientes'>
                        <div id='container-foto-nome'>
                            <div id='display-perfil'>
                                <img id='foto-perfil' src={autor.foto}></img>
                            </div>
                            <div id='nome-subtitulo'>
                                <p id='nome-usuario'>{autor.username}</p>
                                <p id='subtitulo-usuario'>{autor.titulo}</p>
                            </div>
                        </div>
                        <button id='botao-ingredientes'>Ingredientes</button>
                    </div>
                </div>
            </div>

            <h2 id='titulo-secao-passos'>Passo a Passo</h2>

            {/* a partir daqui serão renderizadas as etapas da receita */}

            {mapPassos(JSON.parse(recipe[0].passos))}
            
        </div>

    )
}
