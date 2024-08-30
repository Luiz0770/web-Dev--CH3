import './InfoText.css'

function InfoText({titulo, texto, botao}) {
    return ( 
        <>
            <div className='infoText'>
                <h1>{titulo}</h1>
                <p>{texto}</p>
                <button>{botao}</button>
            </div>
        </>
     );
}

export default InfoText;