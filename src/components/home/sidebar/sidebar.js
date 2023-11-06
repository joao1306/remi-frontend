import React, { useState, useContext } from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPencil, faBook, faStar, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import avatar1 from '../../media/avatar1.png';
import avatar2 from '../../media/avatar2.png';
import avatar3 from '../../media/avatar3.png';
import avatar4 from '../../media/avatar4.png';
import avatar5 from '../../media/avatar5.png';
import avatar6 from '../../media/avatar6.png';

export default function Sidebar() {

    const navigate = useNavigate();

    const { auth } = useContext(AuthContext);

    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const usuarioLogado = JSON.parse(localStorage.getItem('loggedUser'));
    const indexAvatarUsuarioLogado = parseInt(usuarioLogado.foto) - 1;

    const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    const sidebarClasses = `sidebar ${isSidebarActive ? 'active' : ''}`;
    const fotos = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

    const irParaUsuario = () => {
        navigate(`/home/perfil/${usuarioLogado.id}`)
    }

    return (
        <div className={sidebarClasses}>
            <button className="btn-sidebar" onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></button>
            <div className='display-foto-perfil'>
                <img src={fotos[indexAvatarUsuarioLogado]} className='foto-perfil' onClick={irParaUsuario}></img>
            </div>
            <h2 className='nome-perfil'>{usuarioLogado.username}</h2>
            <h4 className='titulo-perfil'>{usuarioLogado.titulo}</h4>
            <div className='line'></div>
            <div className='box-items-sidebar'>

                <a href="/home/cadastro-receita" className='item-sidebar botao-nova-receita'>
                    <FontAwesomeIcon icon={faPencil} className='icone-item-sidebar' />
                    <p className='texto-item-sidebar'>Nova Receita</p>
                </a>

                <a href="/home/minhas-receitas" className='item-sidebar botao-minhas-receitas'>
                    <FontAwesomeIcon icon={faBook} className='icone-item-sidebar' />
                    <p className='texto-item-sidebar'>Minhas Receitas</p>
                </a>

                <a href="/home/lobby" className='item-sidebar botao-melhores-receitas'>
                    <FontAwesomeIcon icon={faStar} className='icone-item-sidebar' />
                    <p className='texto-item-sidebar'>Melhores Receitas</p>
                </a>

                <a href="/home/editar-perfil" className='item-sidebar botao-editar-perfil'>
                    <FontAwesomeIcon icon={faGear} className='icone-item-sidebar' />
                    <p className='texto-item-sidebar'>Editar Perfil</p>
                </a>

                <a href="/login" className='item-sidebar botao-logout'>
                    <FontAwesomeIcon icon={faRightFromBracket} className='icone-item-sidebar' />
                    <p className='texto-item-sidebar'>Logout</p>
                </a>

            </div>
        </div>
    )
}
