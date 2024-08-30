import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return ( 
        <>
            <header>
                <nav className='cabecalho'>
                    <li className='cabecalho-item'>
                        Home
                    </li>
                    <li className='cabecalho-item'>
                        Sobre
                    </li>
                    <li className='cabecalho-item'>
                        Contato
                    </li>
                </nav>
            </header>
        </>
     );
}

export default Header;