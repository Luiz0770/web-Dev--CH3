import FormContato from '../components/FormContato';
import TextoContato from '../components/TextContato';
import './Contato.css'

function Contato() {
    return ( 
        <>
            <div className="container-sobre">
                <TextoContato/>
                <FormContato/>
            </div>
        </>
     );
}

export default Contato;