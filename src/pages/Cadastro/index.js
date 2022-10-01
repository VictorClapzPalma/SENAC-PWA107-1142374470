import {useState} from 'react';
import './cadastro.css'

function Cadastro(){
    const [entradaNome, setEntradaNome] = useState('');
    const [entradaEmail, setEntradaEmail] = useState('');
    const [entradaCPF, setEntradaCPF] = useState('');

    const [dadosUsuarios, setDadosUsuarios] = useState(
        { nomeDados:"Privado", emailDados:"Privado", CPFDados:"Privado"}
    );

    function novoRegistro(dados){
        dados.preventDefault(); 

        setDadosUsuarios(
            { nomeDados:entradaNome, emailDados:entradaEmail, CPFDados:entradaCPF}
        )

        setEntradaNome('');
        setEntradaEmail('');
        setEntradaCPF('');
    }

    return(
        <div>
            <div>
                <h1 class="tituloCadastro">Cadastro</h1>
                
            </div>
            
            <div>
                <form onSubmit={novoRegistro}>
                    <label><span><b>NOME COMPLETO*</b></span></label>
                    <input class ="box" type="text" placeholder="Informe seu nome..." value={entradaNome} onChange={(evento) => setEntradaNome(evento.target.value)} required></input>

                    <br/><br/>
                    <label><b>EMAIL*</b></label>
                    <input class ="box" type="email" placeholder="Informe seu email..." value={entradaEmail} onChange={(evento) => setEntradaEmail(evento.target.value)}required></input>

                    <br/><br/>
                    <label><b>CPF*</b></label>
                    <input class ="box" type="text" placeholder="Informe seu CPF" value={entradaCPF} onChange={(evento) => setEntradaCPF(evento.target.value)}required></input>

                    <br/><br/>
                    <div align="center">
                        <button type="submit" class= "botao">Cadastrar</button>
                    </div>
                </form>
            </div>            

            

            <div class ="registros">
                <h3>Dados Informados:</h3>
                <p>Nome:&nbsp;{dadosUsuarios.nomeDados} </p>
                <p>Email:&nbsp;{dadosUsuarios.emailDados}</p>
                <p>CPF:&nbsp;{dadosUsuarios.CPFDados}</p>
            </div>
        </div>
    );
}

export default Cadastro