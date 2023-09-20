import React, {useState, useContext} from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPencil, faBook, faStar, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {AuthContext} from '../../../contexts/AuthContext'

export default function Sidebar() {

    const {auth} = useContext(AuthContext);

    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const usuarioLogado = JSON.parse(localStorage.getItem('loggedUser'));

    const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    const sidebarClasses = `sidebar ${isSidebarActive ? 'active' : ''}`;


    return (
        <div className={sidebarClasses}>
            <button className="btn-sidebar" onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></button>
            <div className='display-foto-perfil'>
                <img src={usuarioLogado.foto} className='foto-perfil'></img>
            </div>
            <h2 className='nome-perfil'>{usuarioLogado.username}</h2>
            <h4 className='titulo-perfil'>{usuarioLogado.titulo}</h4>
            <div className='line'></div>
            <div className='box-items-sidebar'>
                
                <a href="/home/cadastro-receita" className='item-sidebar botao-nova-receita'>
                        <FontAwesomeIcon icon={faPencil} className='icone-item-sidebar'/>
                        <p className='texto-item-sidebar'>Nova Receita</p>
                </a>

                <a href="/minhas-receitas" className='item-sidebar botao-minhas-receitas'>
                <FontAwesomeIcon icon={faBook} className='icone-item-sidebar'/>
                    <p className='texto-item-sidebar'>Minhas Receitas</p>                    
                </a>

                <a href="/home/lobby" className='item-sidebar botao-melhores-receitas'>
                <FontAwesomeIcon icon={faStar} className='icone-item-sidebar'/>
                    <p className='texto-item-sidebar'>Melhores Receitas</p>                    
                </a>

                <a href="/home/editar-perfil" className='item-sidebar botao-editar-perfil'>
                <FontAwesomeIcon icon={faGear} className='icone-item-sidebar'/>
                    <p className='texto-item-sidebar'>Editar Perfil</p>                    
                </a>

                <a href="/login" className='item-sidebar botao-logout'>
                <FontAwesomeIcon icon={faRightFromBracket} className='icone-item-sidebar'/>
                    <p className='texto-item-sidebar'>Logout</p>                    
                </a>

            </div>
        </div>
    )
}
