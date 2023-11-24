import React, { useState, useEffect } from 'react';
import './receita.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStar, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Ingredientes from '../modal/Ingredientes'
import Delete from '../modal/Delete'
import avatar1 from '../media/avatar1.png';
import avatar2 from '../media/avatar2.png';
import avatar3 from '../media/avatar3.png';
import avatar4 from '../media/avatar4.png';
import avatar5 from '../media/avatar5.png';
import avatar6 from '../media/avatar6.png';

export default function Receita() {

    const [recipe, setRecipe] = useState([]);
    const [autor, setAutor] = useState([]);
    const { id } = useParams();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
    const [listaIngredientes, setListaIngredientes] = useState([]);
    const [avaliada, setAvaliada] = useState(false);

    const indexAvatarAutor = parseInt(autor.foto) - 1;
    const fotos = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
    const navigate = useNavigate();

    const openModal = (ingredientes) => {
        setListaIngredientes(ingredientes);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const openModalDelete = () => {
        setModalDeleteOpen(true);
    }

    const closeModalDelete = () => {
        setModalDeleteOpen(false);
    }

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

    //    function mediaNotas(arr) {
    //        let somaNotas = 0;
    //        const notas = JSON.parse(arr)
    //
    //        notas.map((nota) => {
    //            somaNotas = somaNotas + parseFloat(nota, 10);
    //        });
    //
    //        const numeroDeNotas = notas.length;
    //        const media = somaNotas / numeroDeNotas;
    //        const mediaFormatada = media.toFixed(2);
    //        const mediaString = mediaFormatada.toString().replace(/(\.0*|(?<=(\..*[^0]))0*)$/, '');
    //
    //        return mediaString;
    //    }

    {/* código EXPERIMENTAL */ }
    {/* código EXPERIMENTAL */ }
    function mediaNotas(arr) {
        let somaNotas = 0;

        // Inicializa notas como um array vazio se não estiver definido ou não for um array
        const notas = Array.isArray(arr) ? arr : [];

        // Verifica se notas é um array antes de chamar map
        if (Array.isArray(notas)) {
            notas.map((nota) => {
                somaNotas = somaNotas + parseFloat(nota, 10);
            });

            const numeroDeNotas = notas.length;
            const media = somaNotas / numeroDeNotas;
            const mediaFormatada = media.toFixed(2);
            const mediaString = mediaFormatada.toString().replace(/(\.0*|(?<=(\..*[^0]))0*)$/, '');

            return mediaString;
        } else {
            console.error("notas não é um array");
            return "N/A"; // Ou outro valor padrão, caso notas não seja um array
        }
    }
    {/* código EXPERIMENTAL */ }
    {/* código EXPERIMENTAL */ }


    const estrelas = document.querySelectorAll('.icone-estrela-avaliacao');

    estrelas.forEach((estrela) => {
        estrela.addEventListener('mouseover', () => {
            const estrelaAtual = estrela.id;
            estrelas.forEach((s) => {
                if (s.id <= estrelaAtual) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });


    const avaliarReceita = (nota) => {

        const novaNota = nota;
        const idDaReceita = id;

        const requestBody = {
            idDaReceita: idDaReceita,
            nota: novaNota
        };

        axios.put('http://localhost:8800/persistir-nota', requestBody)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });

        console.log(requestBody.idDaReceita)
        console.log(requestBody.nota)

        // Marque a receita como avaliada
        setAvaliada(true);

        // Adicione a classe "avaliado" ao elemento de ID "box-avaliacao"
        const boxAvaliacao = document.getElementById('box-avaliacao');
        if (boxAvaliacao) {
            boxAvaliacao.classList.add('avaliado');
        }

        // Adicione a classe "avaliado" ao elemento de ID "box-avaliacao"
        const retornoAvaliacao = document.getElementById('retorno-avaliacao');
        if (retornoAvaliacao) {
            retornoAvaliacao.classList.remove('retorno-avaliacao')
            retornoAvaliacao.classList.add('mostrar');
        }
    };

    const checarAutor = () => {
        const idAutorReceita = recipe[0].idusuario;
        const usuarioLogado = JSON.parse(localStorage.getItem('loggedUser'));
        const idUsuarioLogado = usuarioLogado.id;

        if (idAutorReceita === idUsuarioLogado) {
            return (
                <div id='delete'>
                    <button id='botao-deletar-receita' className='icone-categoria' onClick={() => openModalDelete()}>
                        <p className='nome-categoria-icone' id='texto-botao-deletar' >Excluir Receita</p>
                        <FontAwesomeIcon icon={faTrash} id='icone-lixeira' />
                    </button>
                </div>
            );
        } else {
            return (
                <div id='retorno-funcao-checar-autor'>
                    <div className='box-avaliacao-receita' id='box-avaliacao'>
                        <div className={`box-estrelas ${avaliada ? 'avaliado' : ''}`}>
                            <button id='estrela-1' className='icone-estrela-avaliacao' onClick={() => avaliarReceita("1")} ><FontAwesomeIcon icon={faStar} /></button>
                            <button id='estrela-2' className='icone-estrela-avaliacao' onClick={() => avaliarReceita("2")} ><FontAwesomeIcon icon={faStar} /></button>
                            <button id='estrela-3' className='icone-estrela-avaliacao' onClick={() => avaliarReceita("3")} ><FontAwesomeIcon icon={faStar} /></button>
                            <button id='estrela-4' className='icone-estrela-avaliacao' onClick={() => avaliarReceita("4")} ><FontAwesomeIcon icon={faStar} /></button>
                            <button id='estrela-5' className='icone-estrela-avaliacao' onClick={() => avaliarReceita("5")} ><FontAwesomeIcon icon={faStar} /></button>
                        </div>
                    </div>
                    <p id="retorno-avaliacao" className='retorno-avaliacao'>Receita Avaliada!</p>
                </div>
            );
        }
    }

    const irParaUsuario = () => {
        navigate(`/home/perfil/${autor.id}`)
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
                            <div id='display-perfil' onClick={irParaUsuario}>
                                <img id='foto-perfil' src={fotos[indexAvatarAutor]}></img>
                            </div>
                            <div id='nome-subtitulo'>
                                <p id='nome-usuario'>{autor.username}</p>
                                <p id='subtitulo-usuario'>{autor.titulo}</p>
                            </div>
                        </div>
                        <button id='botao-nao-favoritado'>
                            <FontAwesomeIcon icon={faHeart} id='icone-fav' />
                        </button>
                        <button id='botao-ingredientes' onClick={() => openModal(recipe[0].ingredientes)}>Ingredientes</button>
                    </div>
                </div>
            </div>

            <h2 id='titulo-secao-passos'>Passo a Passo</h2>

            {/* a partir daqui serão renderizadas as etapas da receita */}

            {mapPassos(recipe[0].passos)}
            {modalOpen && (<Ingredientes ingredientes={listaIngredientes} onClose={closeModal} nome={recipe[0].nome} />)}
            {checarAutor()}
            {modalDeleteOpen && (<Delete id={recipe[0].idreceitas} onClose={closeModalDelete} />)}
        </div>

    )
}
