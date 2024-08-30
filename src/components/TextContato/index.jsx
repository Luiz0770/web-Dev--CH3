import Instagram from '../../assets/instagram-icon.svg'
import Twitter from '../../assets/twiter-icon.svg'
import Discord from '../../assets/discord-icon.svg'
import './TextContato.css'

function TextoContato() {
    return ( 
        <>
            <div className="txtContato">
                    <h1>Duvidas e suporte, entre em contato: </h1>
                    <div className="icons">
                        <img src={Twitter} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Discord} alt="" />
                    </div>                   
            </div>
        </>
     );
}

export default TextoContato;