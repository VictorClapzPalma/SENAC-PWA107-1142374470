import {useState} from 'react';
import './financiamento.css'

function Financiamento(){
    const [entradaCC, setCC] = useState('');
    const [entradaNome, setNome] = useState('');
    const [entradaValor, setValor] = useState('');
    const [entradaParcelas, setParcelas] = useState('');

    const [dadosUsuarios, setDadosUsuarios] = useState(
        {valorSolicitadoDados:'0,00', valorParcelaDados:'0,00', jurosDados:'0,00'}
    );


    function calcularValor(dados){
        dados.preventDefault();
        var totalParcelas = parseInt(entradaParcelas);
        var solicitacao = parseInt(entradaValor);
        var total = 0;
        var valorJuros = 0;

        if(entradaParcelas === ''){
            totalParcelas = 0;
        } else {
            totalParcelas = parseInt(entradaParcelas);
        }

        if(entradaValor === ''){
            solicitacao = 0;
        } else {
            solicitacao = parseInt(entradaValor);
        }

        if(totalParcelas === 0){
            total = solicitacao;
        } else {
            if(solicitacao > 3000 || totalParcelas >= 11){
                valorJuros = 1.8;
                total = solicitacao * valorJuros;
                total = total /totalParcelas;
            } else {
                total = solicitacao /totalParcelas;
            }
        }
        setDadosUsuarios(
            {valorSolicitadoDados:solicitacao, valorParcelaDados:total, jurosDados:valorJuros}
        );

        setCC('');
        setNome('');
        setValor('');
        setParcelas('');
    }

    return(
        <div>
            <div>
                <h1 class="tituloFinanciamento">Financiamento</h1> 
            </div>
            <div>
                <form onSubmit={calcularValor}>
                    <label><b>C/C:</b></label>
                    <input class = "box" type="text" placeholder="Digite sua Conta Corrente..." value={entradaCC} onChange={(evento) => setCC(evento.target.value)}></input>

                    <br/><br/>
                    <label><b>Nome:</b></label>
                    <input class = "box" type="text" placeholder="Informe seu nome..." value={entradaNome} onChange={(evento) => setNome(evento.target.value)}></input>

                    <br/><br/>
                    <label><b>Valor:</b></label>
                    <input class = "box" type="text" placeholder="Informe o valor solicitado..." value={entradaValor} onChange={(evento) => setValor(evento.target.value)}></input>

                    <br/><br/>
                    <label><b>Parcelas:</b></label>
                    <input class = "box" type="text" placeholder="Parcelas desejadas..." value={entradaParcelas} onChange={(evento) => setParcelas(evento.target.value)}></input>
                    
                    <br/><br/>
                    <div align="center">
                        <button type="submit" class = "botao">Calcular</button>
                    </div>
                </form>
            </div>
            <div>
                <h3 class="subtituloFinanciamento">Valores:</h3>
                <p class = "p">Valor solicitado:&nbsp;R$ {dadosUsuarios.valorSolicitadoDados}</p>
                <p class = "p">Valor da Parcela ???&nbsp;R$ {dadosUsuarios.valorParcelaDados} /m??s</p>
                <p class = "p">Juros:&nbsp;R$ {dadosUsuarios.jurosDados}x</p>
            </div>
        </div>
    );
}

export default Financiamento;