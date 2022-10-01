import { Link } from "react-router-dom";
import './style.css';
function Header(){
    return(
        <header>
            
            <h1 class = "titulo_cabecalho">SystemX</h1>
            <div class = "link_cabecalho">
            <Link to='/' class="link_cabecalho">Home</Link>
            <Link to='/Cadastro' class="link_cabecalho">Cadastro</Link>
            <Link to='/Conta' class="link_cabecalho">Conta</Link>
            <Link to= '/Financiamento' class ="link_cabecalho">Financiamento</Link>
            <Link to= '/SobreNos' class="link_cabecalho">SobreNos</Link>
            </div>
           
        </header>
    )
}
export default Header;