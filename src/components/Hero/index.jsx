import InfoText from '../InfoText';
import imgHero from '../../assets/heroImage.svg'
import './Hero.css'

function Hero() {
    return (
        <>
            <div className='hero'>
                <InfoText
                    titulo={"Crie seus vídeos online"}
                    texto={"Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade."}
                    botao={"Começar agora!"}
                />
                <img src={imgHero} alt="Homem fazendo parkour em um tunel" />
            </div>
        </>
    );
}

export default Hero;