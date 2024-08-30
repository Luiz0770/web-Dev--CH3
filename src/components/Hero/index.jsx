import './Hero.css'

function Hero({ titulo, texto, botao, imagens }) {
    return (
        <>
            <div className='hero'>
                <div className='infoText'>
                    <h1>{titulo}</h1>
                    <p>{texto}</p>
                    <button>{botao}</button>
                </div>
                <div className='hero-imagens'>
                    {imagens.map((imagem, idx) => <img src={imagem} key={idx} />)}
                </div>
            </div>
        </>
    );
}

export default Hero;