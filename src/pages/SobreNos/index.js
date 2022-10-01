import './sobreNos.css'

function SobreNos(){
    return (
        <div>
            <div class="tituloSobre">
                <h1>Sobre Nos</h1>
            </div>
            <div class ="conteudo">
                <p>ADO 02 da máteria <b>Programação WEB</b> do curso Análise e desenvolvimento de Sistemas do campos SENAC - St Amaro</p>
                <p>Atividade desenvolvida para estudar sobre JSX e o uso do useState em aplicações web</p>
                <h3 class="subtituloSobre">Créditos:</h3>
                <p>Aluno: <a  href="https://github.com/VictorClapzPalma" target="_blank" rel="noreferrer">Victor Pereira da Palma</a><br></br></p>
                <p>Professor: <a href="https://github.com/ProfCarlosVerissimo" target="_blank" rel="noreferrer">Carlos Henrique Veríssimo Pereira</a></p>
                <div class ="logo"align="center">
                    <img alt="senac-sp" height="auto" width="85" src="https://seeklogo.com/images/S/Senac-logo-7627EC15FE-seeklogo.com.png"/>
                </div>
            </div>
        </div>
    );
}
export default SobreNos;