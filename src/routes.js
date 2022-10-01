import { Route, BrowserRouter,Routes } from "react-router-dom";
import Home from './pages/Home/index.js';
import Cadastro from './pages/Cadastro/index.js';
import SobreNos from './pages/SobreNos/index.js';
import ContaCorrente from './pages/Conta/index.js';
import Header from './componentes/Header/header.js';
import Financiamento from './pages/Financiamento/index.js'
import Erro from './pages/Erro/erro.js'
function RouterApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path= '/'  element = {<Home/>}/>
                <Route path='*' element={<Erro/>}/>
                <Route path= '/Sobrenos' element = {<SobreNos/>}/>
                <Route path= '/Cadastro' element = {<Cadastro/>}/>
                <Route path= '/Conta' element = {<ContaCorrente/>}/>
                <Route path= '/Financiamento' element ={<Financiamento/>}/>
            </Routes>
        </BrowserRouter>
    )
 }

 export default RouterApp;