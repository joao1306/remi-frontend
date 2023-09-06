import './App.css';
import React, {useContext} from 'react';
import Login from './components/login/login';
import Home from './components/home/home';
import Saudacao from './components/saudacao/saudacao';
import Cadastro from './components/cadastro/cadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/saudacao' element={<Saudacao/>}/>
            <Route path='/home/*' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
