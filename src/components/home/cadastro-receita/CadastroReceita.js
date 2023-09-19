import React, { useState, useEffect } from 'react';
import './cadastroReceita.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrash, faHouse } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function CadastroReceita() {

  const usuarioLogado = JSON.parse(localStorage.getItem('loggedUser'));

  const [arrIngredientes, setarrIngredientes] = useState([]);
  const [arrPassos, setarrPassos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputPasso, setInputPasso] = useState('');
  const [receita, setReceita] = useState({ idusuario: usuarioLogado.id, nome: '', categoria: '', descricao: '', ingredientes: arrIngredientes, passos: arrPassos, foto:''});
  
  useEffect(() => {
    setReceita((prevRecipe) => ({
      ...prevRecipe,
      ingredientes: arrIngredientes,
      passos: arrPassos
    }));
  }, [arrIngredientes, arrPassos]);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReceita((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };
  
  {/* codigo responsável pela funcionalidade de adição e remoção de ingredientes á lista */ }
  const adicionarIngrediente = () => {

    if (inputValue.trim() !== '') {
      const listaAtualizada = [...arrIngredientes, inputValue];
      setarrIngredientes(listaAtualizada);
      setInputValue('');
      const campo = document.getElementById('input-ingrediente-adicionar')
      campo.value = '';
      console.log(listaAtualizada)
    }
  };

  const adicionarPeloEnter = (e) => {
    if (e.key === 'Enter') {
      adicionarIngrediente();
    }
  };

  const deletarIngrediente = (qualDeletar) => {

    const listaAtualizada = arrIngredientes.filter(
      (ingrediente) => ingrediente !== qualDeletar
    );

    console.log(qualDeletar)
    setarrIngredientes(listaAtualizada);

  };

  {/* codigo responsável pela renderização da lista de ingredientes */ }
  const mapIngredientes = (arrIngredientes) => {

    return arrIngredientes.map((ingrediente, index) => (

      <div className='box-ingrediente' >
        <p className='nome-ingrediente' >{ingrediente}</p>
        <button className='botao-lixeira' id='deletar-ingrediente' onClick={() => { deletarIngrediente(ingrediente) }} ><FontAwesomeIcon icon={faTrash} className='icone-lixeira' /></button>
      </div>

    ))

  }

  { /* codigo responsável pela adição ou remoção de passos do preparo da receita */ }
  const adicionarPasso = () => {

    if (inputPasso.trim() !== '') {
      const listaAtualizada = [...arrPassos, inputPasso];
      setarrPassos(listaAtualizada);
      setInputPasso('');
      const campo = document.getElementById('input-passo')
      campo.value = '';
      console.log(listaAtualizada)
    }
  };

  const adicionarPassoPeloEnter = (e) => {
    if (e.key === 'Enter') {
      adicionarPasso();
    }
  };

  const deletarPasso = (qualDeletar) => {

    const listaAtualizada = arrPassos.filter(
      (passo) => passo !== qualDeletar
    );

    console.log(qualDeletar)
    setarrPassos(listaAtualizada);

  };


  {/* codigo responsável pela renderização da lista de etapas(passos) da receita */ }
  const mapPassos = (arrPassos) => {
    return arrPassos.map((passo, index) => (

      <div className='box-passo'>

        <div className='display-ordinal'>
          <p className='numero-passo'>{index + 1}</p>
        </div>

        <p className='texto-passo'>{passo}</p>
        <button className='delete-passo' onClick={() => deletarPasso(passo)}><FontAwesomeIcon icon={faTrash} className='icone-lixeira-passo'/></button>

      </div>

    ))

  }

  const persistirReceita = async (e) => {
    e.preventDefault();

    // Convertendo as arrays em strings JSON
    const ingredientesJSON = JSON.stringify(arrIngredientes);
    const passosJSON = JSON.stringify(arrPassos);

    const novaReceita = {
      idusuario: usuarioLogado.id,
      nome: receita.nome,
      categoria: receita.categoria,
      descricao: receita.descricao,
      ingredientes: ingredientesJSON,
      passos: passosJSON,
      foto: receita.foto
    };

    try {
      const response = await axios.post("http://localhost:8800/cadastrar-receita", novaReceita);

      if(response.status === 200) {
        alert("Receita cadastrada com sucesso!");
      } else {
        console.log('Persistência falhou:', response.data.message);
        alert("Sinto muito, há algum problema com os dados.");
      }
    } catch (error) {
      console.log(error.response.data);
      alert("Sinto muito, algo não está certo.");
    }
};


  return (
    <div className='form-receita'>
      <div className='container-botao-home'>
        <a href='/home/lobby' className='botao-home'>
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </div>
      <div className='form-container' >
        <h2 className='titulo-formulario-receita'>Cadastro de Receita</h2>

        {/* bloco superior do formulario (nome, descricao, link, categoria e ingredientes) */}
        <div className='bloco-superior'>
          <div className='bloco-esquerdo'>
            <input type='text' name='nome' onChange={handleInputChange} placeholder='Nome da Receita' className='input-bloco-superior-esquerdo'></input>
            <textarea className='text-area' name='descricao' onChange={handleInputChange} placeholder='Descrição aqui'></textarea>
            <div className='box-nome-categoria'>
              <input type='text' name='foto' onChange={handleInputChange} placeholder='Cole o link de uma foto aqui' className='input-bloco-superior-esquerdo-link'></input>
              <select className='select-categoria' name='categoria' onChange={handleInputChange}>
                <option value="Carnes">Carnes</option>
                <option value="Massas">Massas</option>
                <option value="Doces">Doces</option>
                <option value="Peixes">Peixes</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </div>
          </div>
          <div className='bloco-direito'>

            <form className='box-persistencia-ingrediente' onSubmit={(e) => { e.preventDefault() }}>
              <input className='input-ingrediente' id='input-ingrediente-adicionar' placeholder='Adicione os ingredientes aqui.' onChange={(e) => setInputValue(e.target.value)} onKeyPress={adicionarPeloEnter} ></input>
              <FontAwesomeIcon icon={faCirclePlus} className='botao-ingrediente' onClick={adicionarIngrediente} />
            </form>

            <div className='container-ingredientes'>

              {mapIngredientes(arrIngredientes)}

            </div>


          </div>
        </div>

        <div className='adicionar-passo'>
          <input type='text' className='input-passo' placeholder='Passo da Receita | Ex.: Cortar em cubinhos e cozinhar por 3 minutos...' id='input-passo' onChange={(e) => setInputPasso(e.target.value)} onKeyPress={adicionarPassoPeloEnter}></input>
          <FontAwesomeIcon icon={faCirclePlus} className='botao-passo' onClick={adicionarPasso} />
        </div>
        <div className='line-passos'></div>

          {mapPassos(arrPassos)}

        <div className='container-botao-enviar'>
          <button className='botao-enviar-formulario' onClick={persistirReceita}>
            Salvar
          </button>
        </div>

      </div>
    </div>
  )
}
