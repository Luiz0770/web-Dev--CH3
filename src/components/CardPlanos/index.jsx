import './CardPlanos.css'

function CardPlanos({ nome, selecao, textButton, corTopo, corBotao, corTxtBotao, imagem }) {

    console.log(selecao)

    return (
        <>
            <div className='card-plano'>
                <div className='card-planos-header' style={{ backgroundColor: corTopo }}>
                    {nome}
                </div>
                <div className='card-planos-content'>
                    <div className='card-plano-select'>
                        {selecao != '' ? selecao.map((selecionado, index) => (
                            <>
                              <label htmlFor="usuario">{selecionado.label} Usuario</label>
                                <select name="usuario" id="usuario">
                                    <option key={index} value={selecionado.opcao}>{selecionado.opcao}</option>
                                </select>
                            </>
                        )) : <img src={imagem} alt='Imagem de um celular corporativo'></img>}
                    </div>
                    <button style={{backgroundColor: corBotao, color: corTxtBotao}}>{textButton}</button>
                </div>
            </div>
        </>
    );
}

export default CardPlanos;