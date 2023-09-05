import React from 'react';
import './home.css';
import Sidebar from './sidebar/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Categoria from './categoria/categoria'
import Card from './card/card'

export default function home() {
  return (
    <div className='screen'>
      <Sidebar></Sidebar>
      <div className='conteudo-home'>

        <div className='box-barra-de-pesquisa'>
          <input type='text' className='barra-de-pesquisa' placeholder='Bolo de Cenoura'></input>
          <button className='botao-lupa'><FontAwesomeIcon icon={faMagnifyingGlass} className='icone-lupa'/></button>
        </div>

        <div className='box-titulo-secao'>
          <h2 className='texto-titulo-secao'>Categorias</h2>
        </div>

        <div className='sec-categorias'>
          <div className='box-categorias'>

            <Categoria img='https://supermercadosrondon.com.br/guiadecarnes/images/postagens/as_7_melhores_carnes_para_churrasco_21-05-2019.jpg' cor='laranja' titulo='Carnes'></Categoria>

            <Categoria img='https://www.receiteria.com.br/wp-content/uploads/receitas-de-massas-0.jpg' cor='vermelho' titulo='Massas'></Categoria>

            <Categoria img='https://vitat.com.br/receitas/images/recipeshandler.jpg?id=80707&tipo=r&default=s' cor='rosa' titulo='Doces'></Categoria>

            <Categoria img='https://receitinhas.com.br/wp-content/uploads/2017/09/Passion-Fruit-Juice.jpg' cor='verde' titulo='Bebidas'></Categoria>

            <Categoria img='https://img.freepik.com/fotos-gratis/prato-de-frutos-do-mar-frescos-com-sashimi-de-sushi-e-wasabi-gerado-por-ia_188544-14075.jpg?w=2000' cor='azul' titulo='Peixes'></Categoria>

          </div>
        </div>

        <div className='box-titulo-secao'>
          <h2 className='texto-titulo-secao'>Melhores Receitas</h2>
        </div>

        <div className='box-receitas'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>

      </div>
    </div>
  )
}


