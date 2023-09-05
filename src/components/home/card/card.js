import React from 'react'
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Card() {
  return (
    <div className='card-box'>
        <div className='display-foto'>
          <img src='https://s2.glbimg.com/owIUIv1ShU7hdcpiRVZJgudch-A=/e.glbimg.com/og/ed/f/original/2015/11/30/thinkstockphotos-481608168.jpg' className='foto-card'></img>
        </div>

        <div className='box-titulo-subtitulo'>
          <h2 className='titulo-card'>Picanha no bafo</h2>
          <h4 className='subtitulo-card'>carnes</h4>
        </div>

        <div className='box-perfil-nota'>

          <div className='display-foto-perfil'>
            <img src='https://www.maryhelp.com.br/dicas/wp-content/uploads/2021/08/cozinheiro-x-dicas-para-encontrar-o-profissional-ideal-20210422170036.jpg.jpg' className='foto-perfil-card'></img>
          </div>

          <div className='box-nome-titulo'>
            <h2 className='nome-usuario'>Hélio Batista</h2>
            <h4 className='titulo-usuario'> Cozinheiro</h4>
          </div>

          <div className='box-nota'>
            <FontAwesomeIcon icon={faStar} className='icone-estrela'/>
            <h3 className='nota'>4.3</h3>
          </div>


        </div>
        
        <button className='botao-card'>Vamos lá!</button>

    </div>
  )
}
