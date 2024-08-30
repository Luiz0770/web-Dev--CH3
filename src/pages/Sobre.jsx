import Hero from "../components/Hero";

// Imagens do Hero
import photoScreen1 from '../assets/phone-screen-1.svg'
import photoScreen2 from '../assets/phone-screen-2.svg'
import Planos from "../components/Planos";

function Sobre() {
    return (
        <>
            <Hero
                titulo={"Bem-vindo à revolução dos vídeos!"}
                texto={"Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores."}
                botao={"Baixe o app"}
                imagens={[photoScreen1, photoScreen2]}
            />
            <Planos/>
        </>
    );
}

export default Sobre;