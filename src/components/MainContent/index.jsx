import Cards from "../Cards";
import Hero from "../Hero";
import './MainContent.css'

// Plataformas Logos:
import lgYoutube from '../../assets/youtube-logo.svg'
import lgTiktok from '../../assets/tiktok-logo.svg'
import lgFacebook from '../../assets/facebook-logo.svg'
import lgInstagram from '../../assets/instagram-logo.svg'

// Imagens Hero
import imgHero from '../../assets/heroImage.svg'

function MainContent() {

    const plataformas = [
        {
            nome: "Youtube",
            corFundo: "#F1C2B0",
            icone: lgYoutube,
            descricao: "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
        },
        {
            nome: "Tiktok",
            corFundo: "#F9EB98",
            icone: lgTiktok,
            descricao: "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
        },
        {
            nome: "Facebook",
            corFundo: "#C0D9DD",
            icone: lgFacebook,
            descricao: "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
        },
        {
            nome: "Instagram",
            corFundo: "#6975E8",
            icone: lgInstagram,
            descricao: "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
        },
    ]

    return (
        <>
            <Hero
                titulo={"Crie seus vídeos online"}
                texto={"Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade."}
                botao={"Começar agora!"}
                imagens={[imgHero]}
            />

            <div className="cards">
                {plataformas.map((plataforma, idx) => <Cards
                    key={plataforma.nome}
                    nome={plataforma.nome}
                    indice={`0${idx + 1}`}
                    corFundo={plataforma.corFundo}
                    descricao={plataforma.descricao}
                    icone={plataforma.icone}
                />)}
            </div>
        </>
    );
}

export default MainContent;