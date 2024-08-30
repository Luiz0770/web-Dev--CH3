import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <>
            <header>
                <nav className='cabecalho'>
                    <li>
                        <Link className='cabecalho-item' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='cabecalho-item' to='/sobre'>Sobre</Link>
                    </li>
                    <li>
                        <Link className='cabecalho-item' to='/contato'>Contato</Link>
                    </li>
                </nav>
            </header>
        </>
    );
}

export default Header;