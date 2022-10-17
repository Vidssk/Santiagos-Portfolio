import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import '../App.css';
import { Button } from './Button'
import './CSS/HeroSection.css';
import BackgroundVideo from './video.mp4';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import Resume from '../images/Software_Resume.pdf'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={BackgroundVideo} autoPlay loop muted />
            <h1>RELENTLESS</h1>
            <p>C++ Software Developer</p> 
            <p>Utilizing Unreal engine for VR and gaming applications.</p>
            <div className="hero-btns">
            <a href={Resume} download="SantiagosResume" target='_blank' rel="noreferrer">
                <button className = {`btn btn--primary btn--large`} type ="button">
                    Download Resume <FontAwesomeIcon icon={faDownload}/>
                </button>
            </a>
               {/*
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize = 'btn--large'
                buttonLink = '/footer'
                >
                </Button>
               */}
            </div>
        </div>
    );
}

export default HeroSection
