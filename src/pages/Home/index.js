import './index.css';

function Home(){
    return(
        <div class ='paginaHome'>
            <div class="cabecalhoHome">
                <h1 class="tituloCabecalhoHome">Home page</h1>
            </div>
            <div>
                <p class="textoPrincipalHome">
                    Clique em algum campo da barra de menu acima para ser redirecionado a outra página
                </p>
                <h2><img src="../imagem/Systemx.png"/></h2>
               
            </div>

            <div class="conteinerElemento">
                <div class="elemento"></div>
            </div> 
        </div>
    );
}

export default Home;