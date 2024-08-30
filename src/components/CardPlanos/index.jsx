import './CardPlanos.css'

function CardPlanos({ nome, usuarios, opcoes, textButton, corTopo }) {

    console.log(opcoes)

    return (
        <>
            <div className='card-plano'>
                <div className='card-planos-header' style={{ backgroundColor: corTopo }}>
                    {nome}
                </div>
                <div className='card-planos-content'>
                    <div className='card-plano-select'>
                        <label htmlFor="usuario">{usuarios} Usuario</label>
                        <select name="usuario" id="usuario">
                            <option value="10">10 vídeos</option>
                        </select>

                    </div>
                    <button>{textButton}</button>
                </div>
            </div>
        </>
    );
}

export default CardPlanos;