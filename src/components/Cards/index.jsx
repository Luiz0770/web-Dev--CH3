import './Cards.css'

function Cards({ nome, indice, corFundo, descricao,icone }) {
    return (
        <>
            <div className='card-itens' style={{ backgroundColor: corFundo }}>
                <div className='card-header'>
                    <p className='card-indice'>{indice}</p>
                    <img src={icone} alt={"Logo " + nome} />
                </div>
                <h3 className='card-titulo'>{nome}</h3>
                <p className='card-descricao'>{descricao}</p>
            </div>
        </>
    );
}

export default Cards;