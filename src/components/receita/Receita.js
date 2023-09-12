import React from 'react';
import './receita.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStar, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Receita() {
    return (

        <div className='screen-receita'>
            <div className='container-botao-home'>
                <a href='/home/lobby' className='botao-home'>
                    <FontAwesomeIcon icon={faHouse} />
                </a>
            </div>

            <div className='bloco-superior-receita'>
                <div className='display-foto-receita'>
                    <img className='foto-receita' src='https://supermercadosrondon.com.br/guiadecarnes/images/postagens/as_7_melhores_carnes_para_churrasco_21-05-2019.jpg'></img>
                </div>
                <div className='bloco-info-receita'>
                    <div className='nome-nota-receita'>
                        <div id='box-titulo-receita'>
                            <h2 id='nome-receita'>Picanha na Brasa</h2>
                            <p id='subtitulo-receita'>Carnes</p>
                        </div>
                        <div id='avaliacao'>
                            <FontAwesomeIcon icon={faStar} id='icone-estrela-receita' />
                            <p id='nota'>4.5</p>
                        </div>
                    </div>
                    <p className='texto-descricao-receita'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus orci eget sem consequat, et euismod metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, ex et porta laoreet, tellus metus tempus ante, quis bibendum nulla dui quis leo. Mauris feugiat velit magna, quis gravida turpis bibendum sed. Praesent cursus aliquam augue, vel hendrerit ipsum tempus non. Nam lorem odio, blandit eu odio in, auctor malesuada velit. Nulla feugiat et eros vitae auctor. Vestibulum venenatis, ligula non pellentesque commodo, nulla urna vestibulum risus, rutrum pellentesque enim dolor dignissim est. Nulla a lectus sit amet mauris vulputate dignissim. Aenean lectus mi, pretium a ultrices in, aliquam mattis augue. Maecenas egestas tincidunt hendrerit.</p>
                    <div id='bloco-perfil-botao-ingredientes'>
                        <div id='container-foto-nome'>
                            <div id='display-perfil'>
                                <img id='foto-perfil' src='https://upload.wikimedia.org/wikipedia/commons/4/43/Foto_Perfil.jpg'></img>
                            </div>
                            <div id='nome-subtitulo'>
                                <p id='nome-usuario'>Felipe Ramos</p>
                                <p id='subtitulo-usuario'>Cozinheiro</p>
                            </div>
                        </div>
                        <button id='botao-ingredientes'>Ingredientes</button>
                    </div>
                </div>
            </div>

            <h2 id='titulo-secao-passos'>Passo a Passo</h2>

            {/* a partir daqui serão renderizadas as etapas da receita */}
            
            
            <div className='container-passos-receita'>
                <div className='box-passo-receita'>
                    <div className='display-ordinal'>
                        <p className='numero-passo'>1</p>
                    </div>
                    <p className='texto-passo'>Cortar em cubinhos de 2 a 3 centímetros cúbicos</p>
                    <button className='delete-passo'><FontAwesomeIcon icon={faTrash} className='icone-lixeira-passo' /></button>
                </div>
            </div>

            <div className='container-passos-receita'>
                <div className='box-passo-receita'>
                    <div className='display-ordinal'>
                        <p className='numero-passo'>2</p>
                    </div>
                    <p className='texto-passo'>Cortar em cubinhos de 2 a 3 centímetros cúbicos</p>
                    <button className='delete-passo'><FontAwesomeIcon icon={faTrash} className='icone-lixeira-passo' /></button>
                </div>
            </div>

            <div className='container-passos-receita'>
                <div className='box-passo-receita'>
                    <div className='display-ordinal'>
                        <p className='numero-passo'>3</p>
                    </div>
                    <p className='texto-passo'>Cortar em cubinhos de 2 a 3 centímetros cúbicos</p>
                    <button className='delete-passo'><FontAwesomeIcon icon={faTrash} className='icone-lixeira-passo' /></button>
                </div>
            </div>





        </div>

    )
}
