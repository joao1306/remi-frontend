import React, {useEffect} from 'react'
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Card(prop) {


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
    
    <div className='card-box'>
        <div className='display-foto'>
          <img src={prop.foto} className='foto-card'></img>
        </div>

        <div className='box-titulo-subtitulo'>
          <h2 className='titulo-card'>{prop.nome}</h2>
          <h4 className='subtitulo-card'>{prop.categoria}</h4>
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
            <h3 className='nota'>{mediaNotas(prop.notas)}</h3>
          </div>


        </div>
        
        <button className='botao-card'>Vamos lá!</button>

    </div>
  )
}
