import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Footer.css'
import { faInstagram, faFacebook, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Footer() {
    return (
            <footer className="footer-wrap">
                <div className='waves'>
                    <div className='wave' id='wave1'/>
                    <div className='wave' id='wave2'/>
                    <div className='wave' id='wave3'/>
                    <div className='wave' id='wave4'/>
                </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Santiago Hernandez
                        </Link>
                    </div>
                    <small className="website-rights">Santiago © 2022</small>
                    <div className="social-icons">
                        <Link className="social-icon-link"
                        to={{ pathname: "https://www.linkedin.com/in/santiago-hernandez-120199"}}
                        target="_blank"
                        aria-label='Linkedin'
                        >
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </Link>
                        <Link className="social-icon-link github"
                        to={{ pathname: "https://github.com/Vidssk"}}
                        target="_blank"
                        aria-label='GitHub'
                        >
                            <FontAwesomeIcon icon={faGithub}/>
                        </Link>
                        <Link className="social-icon-link"
                        to={{ pathname: "https://www.instagram.com/santy_hernandez_01/"}}
                        target="_blank"
                        aria-label='Instagram'
                        >
                            <FontAwesomeIcon icon={faInstagram}/>
                        </Link>
                        <Link className="social-icon-link facebook"
                        to={{ pathname: "https://www.facebook.com/profile.php?id=100002036873433"}}
                        target="_blank"
                        aria-label='Facebook'
                        >
                            <FontAwesomeIcon icon={faFacebook}/>
                        </Link>
                    </div>
                </div>
            </section>
           </footer>
    )
}

export default Footer
