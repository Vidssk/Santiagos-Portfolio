import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './CSS/Navbar.css'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SHLogo from '../images/SHLogo.svg'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'




function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton()
    }, []);
    
    window.addEventListener('resize', showButton);
    
    return (
        <>
            <nav className= "navbar">

                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                         Santiago Hernandez 
                        {/*
                         <img src={SHLogo} alt="Portfolio Logo"/>
                             <FontAwesomeIcon icon={faCoffee}/>*/}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to ='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='projects-page' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                            </Link>
                        </li>
                        <li>
                        </li>
                    </ul>
                        {/*{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                            <Link to ='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                            </Link>
                        */}
                    
                </div>
        
            </nav>
        </>
    )
}

export default Navbar
