import {useState} from 'react';
import './index.css'

function MovimentacaoDaConta(){
    const [entradaNome, setNome] = useState('');
    const [entradaCPF, setCPF] = useState('');
    const [entradaDeposito, setDeposito] = useState('');
    const [entradaSaque, setSaque] = useState('');
    const [entradaSaldo, setSaldo] = useState('');

    const [dadosUsuarios, setUsuarios] = useState(
        {saldoDados:'0,00', depositoDados:'0,00', saqueDados:'0,00'}
    );

    function atualizarValores(dados){
        dados.preventDefault();
        var depositoValor;
        var saqueValor;
        var saldoValor;
        var total; 

        if(entradaDeposito === ''){
            depositoValor = 0;
        } else {
            depositoValor = parseInt(entradaDeposito);
        }
        

        if(entradaSaque === ''){
            saqueValor = 0;
        } else {
            saqueValor = parseInt(entradaSaque);
        }
        

        if(entradaSaldo === ''){
            saldoValor = 0;
        } else {
            saldoValor = parseInt(entradaSaldo);
        }

        total = 0;


        total = saldoValor - saqueValor + depositoValor;
        
        setUsuarios(
            {saldoDados:total, depositoDados:depositoValor, saqueDados:saqueValor}
        );
        
        setNome('');
        setCPF('');
        setDeposito('');
        setSaque('');
        setSaldo('');

    }

    return (
        <div>
            <body>
            <div class="titulo">
                <h1>Movimentacao C/C</h1>
            </div>
            <div>
                <form onSubmit={atualizarValores}>
                    <label>Nome:&nbsp;</label>
                    <input class= "entrada" type="text" placeholder="Informe um nome..." value={entradaNome} onChange={(evento) => setNome(evento.target.value)}required/>

                    <br/><br/>
                    <label>CPF:&nbsp;</label>
                    <input class= "entrada" type="text" placeholder="Informe o seu CPF..." value={entradaCPF} onChange={(evento) => setCPF(evento.target.value)}required/>

                    <br/><br/>
                    <label>Saldo:&nbsp;</label>
                    <input class= "entrada" type="text" placeholder="Informe o seu saldo..." value={entradaSaldo} onChange={(evento) => setSaldo(evento.target.value)}required/>

                    <br/><br/>
                    <label>Deposito:&nbsp;</label>
                    <input class= "entrada" type="text" placeholder="Quantia a depositar..." value={entradaDeposito} onChange={(evento) => setDeposito(evento.target.value)}required/>

                    <br/><br/>
                    <label>Sacar:&nbsp;</label>
                    <input class= "entrada" type="text" placeholder="Quantia a sacar..." value={entradaSaque} onChange={(evento) => setSaque(evento.target.value)}required/>

                    <br/><br/>
                    <div class="submit" align="center">
                        <button type="submit" class= "botao">Atualizar</button>
                    </div>
                </form>
            </div>

            <div class = "resutlado">
                <h3 class="subtituloMovimentacao">Total:</h3> 
                <p>Saldo:&nbsp;R$&nbsp;{dadosUsuarios.saldoDados}</p>
                <p>Valor Depositado:&nbsp;+R$&nbsp;{dadosUsuarios.depositoDados}</p>
                <p>Valor Saque:&nbsp;-R$&nbsp;{dadosUsuarios.saqueDados}</p>
            </div>
            </body>
        </div>
    );
}

export default MovimentacaoDaConta;