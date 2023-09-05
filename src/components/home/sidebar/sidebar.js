import React, {useState, useContext} from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPencil, faBook, faStar, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {AuthContext} from '../../../contexts/AuthContext'

export default function Sidebar() {

    const {auth} = useContext(AuthContext);

    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    const sidebarClasses = `sidebar ${isSidebarActive ? 'active' : ''}`;


    return (
        <div className={sidebarClasses}>
            <button className="btn-sidebar" onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></button>
            <div className='display-foto-perfil'>
                <img src='https://i.redd.it/z8iu5h4dvfy51.png' className='foto-perfil'></img>
            </div>
            <h2 className='nome-perfil'>{auth}</h2>
            <h4 className='titulo-perfil'>Titulo</h4>
            <div className='line'></div>
            <div className='box-items-sidebar'>
                
                <div className='item-sidebar'>
                    <FontAwesomeIcon icon={faPencil} className='icone-item-sidebar'/>
                    <p className='texto-item-sidebar'>Nova Receita</p>
                </div>

                <div className='item-sidebar'>
                <FontAwesomeIcon icon={faBook} className='icone-item-sidebar'/>
                    <p className='texto-item-sidebar'>Minhas Receitas</p>                    
                </div>

                <div className='item-sidebar'>
                <FontAwesomeIcon icon={faStar} className='icone-item-sidebar'/>
                    <p className='texto-item-sidebar'>Melhores Receitas</p>                    
                </div>

                <div className='item-sidebar'>
                <FontAwesomeIcon icon={faGear} className='icone-item-sidebar'/>
                    <p className='texto-item-sidebar'>Editar Perfil</p>                    
                </div>

                <div className='item-sidebar'>
                <FontAwesomeIcon icon={faRightFromBracket} className='icone-item-sidebar'/>
                    <p className='texto-item-sidebar'>Logout</p>                    
                </div>

            </div>
        </div>
    )
}