import imgCorporativo from '../../assets/corporativo.svg'
import CardPlanos from '../CardPlanos';
import './Planos.css'

function Planos() {

    const planos = [
        {
            nome: "Individual",
            textButton: "Cadastrar",
            corTopo: "#6975E8",
            corBotao: "#6975E8",
            corTxtBotao: "#fff",
            selecao: [{
                label: "1",
                opcao: "10 vídeos R$15",
            }],
        },
        {
            nome: "Profissional - Times",
            textButton: "Cadastrar",
            corTopo: "#fff",
            corBotao: "#fff",
            selecao: [
                {
                    label: "1-10",
                    opcao: "Vídeos Ilimitados R$40",
                },
                {
                    label: "+10",
                    opcao: "Vídeos Ilimitados R$20",
                }],
        },
        {
            nome: "Corporativo",
            textButton: "Entre Em Contato",
            corTopo: "#fff",
            corBotao: "#fff",
            selecao: [],
        },
    ]

    return (
        <>
            <div className='planos'>
                <h2>Planos</h2>
                <div className='container-card-planos'>
                    {planos.map(plano => <CardPlanos
                        key={plano.nome}
                        nome={plano.nome}
                        selecao={plano.selecao}
                        textButton={plano.textButton}
                        corTopo={plano.corTopo}
                        corBotao={plano.corBotao}
                        corTxtBotao={plano.corTxtBotao}
                        imagem={imgCorporativo}
                    />)}
                </div>
            </div>
        </>
    );
}

export default Planos;