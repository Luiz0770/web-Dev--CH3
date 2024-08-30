import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <>
            <header>
                <nav className='cabecalho'>
                    <li className='cabecalho-item'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='cabecalho-item'>
                        <Link to='/sobre'>Sobre</Link>
                    </li>
                    <li className='cabecalho-item'>
                        <Link to='/contato'>Contato</Link>
                    </li>
                </nav>
            </header>
        </>
    );
}

export default Header;