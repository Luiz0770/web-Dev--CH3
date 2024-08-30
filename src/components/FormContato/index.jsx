import './FormContato.css'

function FormContato() {
    return (
        <>
            <div>
                <form action="" className="forms-contato">
                    <div className='form-input'>
                        <label htmlFor="name">Nome:</label>
                        <input type="text"/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor="email">Email:</label>
                        <input type="text"/>
                    </div>
                    <label htmlFor="Message">Message:</label>
                    <textarea name="message" id="message"></textarea>
                    <button className='btnContato'>Enviar</button>
                </form>
            </div>
        </>
    );
}

export default FormContato;