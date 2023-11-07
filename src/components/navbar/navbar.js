import { useState, useEffect } from 'react';
import { Button } from '../button/button';
import '../../css/navbar.css'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
    
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                SPINERGY
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
                </li>
                <li className='nav-item'>
                <Link
                    to='/search'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    Cart
                </Link>
                </li>
                <li>
                <Link
                    to='/sign-up'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                >
                    Log In
                </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Log In</Button>}
            </div>
        </nav>
    )
}