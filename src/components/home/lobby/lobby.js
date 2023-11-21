import React, { useState, useEffect } from 'react';
import '../home.css';
import Categoria from '../categoria/categoria'
import Card from '../card/card'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Lobby() {

    const [recipes, setRecipes] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('all');
    const [filtroNome, setFiltroNome] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleInputChange(event) {
        const valorFiltro = event.target.value;
        setFiltroNome(valorFiltro);
    }

    function filtrarReceitas() {
        if (filtroNome.trim() === '') {
            return recipes;
        }
        return recipes.filter(receita => receita.nome.toLowerCase().includes(filtroNome.toLowerCase()));
    }

//    function mediaNotas(arr) {
//        let somaNotas = 0;
//        const notas = JSON.parse(arr)
//    
//        notas.map((nota) => {
//          somaNotas = somaNotas + parseFloat(nota, 10);
//        });
//    
//        const numeroDeNotas = notas.length;
//        const media = somaNotas / numeroDeNotas;
//        const mediaFormatada = media.toFixed(2);
//        const mediaString = mediaFormatada.toString().replace(/(\.0*|(?<=(\..*[^0]))0*)$/, '');
//    
//        return mediaString;
//      }

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


    async function fetchBestRecipes() {
        
        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:8800/best-recipes?categoria=${categoriaSelecionada}`);
            if (response.status === 200) {
                const data = response.data;

                // Calcula a média das notas e adiciona como uma nova propriedade 'mediaNota' em cada receita
                const recipesComMedia = data.map((receita) => ({
                    ...receita,
                    mediaNota: parseFloat(mediaNotas(receita.notas), 10),
                }));

                // Ordena as receitas com base na média das notas
                const receitasOrdenadas = recipesComMedia.sort((a, b) => b.mediaNota - a.mediaNota);

                setRecipes(receitasOrdenadas);
            } else {
                throw new Error('Erro ao buscar receitas');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchBestRecipes();
    }, [categoriaSelecionada]);

    const definirCategoria = (categoria) => {
        if(categoria === categoriaSelecionada){
            setCategoriaSelecionada('all')
        }else{
            setCategoriaSelecionada(categoria)
        }
        fetchBestRecipes();
    }

    function mapReceitas(arr) {
        return arr.map((receita, index) => (<Card key={index}
            foto={receita.foto}
            nome={receita.nome}
            categoria={receita.categoria}
            notas={receita.notas}
            idusuario={receita.idusuario}
            idreceita={receita.idreceitas}
        ></Card>))
    }

    return (
        <div className='conteudo-home'>

            <div className='box-barra-de-pesquisa'>
                <input type='text' className='barra-de-pesquisa' placeholder='Bolo de Cenoura' value={filtroNome} onChange={handleInputChange}></input>
                <button className='botao-lupa'><FontAwesomeIcon icon={faMagnifyingGlass} className='icone-lupa' /></button>
            </div>

            <div className='sec-categorias'>
                <div className='box-categorias'>

                    <button className='botao-categoria-lobby' onClick={() => {definirCategoria('Carnes')}}>
                        <Categoria img='https://static.vecteezy.com/system/resources/previews/024/320/541/non_2x/delicious-barbecued-spare-ribs-tasty-bbq-meat-isolated-on-transparent-background-generate-ai-free-png.png' cor='laranja' titulo='Carnes' ></Categoria>
                    </button>

                    <button className='botao-categoria-lobby' onClick={() => {definirCategoria('Massas')}}>
                        <Categoria img='https://combrasil.com/wp-content/uploads/2022/11/lamen-carne-72-2.png' cor='vermelho' titulo='Massas'></Categoria>
                    </button>

                    <button className='botao-categoria-lobby' onClick={() => {definirCategoria('Doces')}}> 
                        <Categoria img='https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112651/20412_fotos_23-sodie_bolo_inteiro_540x400px23.png' cor='rosa' titulo='Doces'></Categoria>
                    </button>

                    <button className='botao-categoria-lobby' onClick={() => {definirCategoria('Bebidas')}}>
                        <Categoria img='https://almmediaprod.s3.me-south-1.amazonaws.com/BrandCategoryMapping/juices8162022100235AM.png' cor='verde' titulo='Bebidas'></Categoria>
                    </button>

                    <button className='botao-categoria-lobby' onClick={() => {definirCategoria('Peixes')}}>
                        <Categoria img='https://static.wixstatic.com/media/4c4a08_4dc1b11fddd84be2ac282ded5d6a994d~mv2.png/v1/fill/w_598,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Novo%20Combo%20P%20Compartilhar%20Dueto%20IFOOD%201200x900px.png' cor='azul' titulo='Peixes'></Categoria>
                    </button>

                </div>
            </div>

            <div className='box-titulo-secao'>
                <h2 className='texto-titulo-secao'>Melhores Receitas</h2>
            </div>

            <div className='box-receitas'>
                {isLoading ? (<p>Carregando</p>) : (mapReceitas(filtrarReceitas()))}
            </div>
        </div>
    )
}
