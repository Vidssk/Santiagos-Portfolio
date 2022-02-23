import React from 'react'
import './CSS/About.css'
import Footer from './Footer'
import ImageSlider from './Slider/ImageSlider'
import { SliderData } from './Slider/SliderData'

function About(props) {
    return (
    <div className='page'>
    <div className='About-page'>
            <div className="image-wrapper">
                <ImageSlider slides={SliderData}/>
            </div>
            <div className="about-text-wrapper">
                    {/*<h1 className="title">ABOUT ME</h1>*/}
                <section className="about-information-text">
                <p className='About-wrapper'>
                <h2>About Me</h2>
                <p className='information'>
                Self-taught Virtual Reality Developer located in Houston pursuing an opportunity in XR Development.
                </p>
                </p>
                <section className='Abilities'>
                <p className='Skills-wrapper'>
                <h3>Skills</h3>
                <ul className='list'>
                    <li>C++</li>
                    <li>Unreal Engine</li>
                    <li>Blender</li>
                    <li>Substance Painter</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>Oral Presentations</li>
                </ul>
                </p>
                <p className='Hobbies-wrapper'>
                <h3>Hobbies</h3>
                <ul className='list'>
                    <li>Dancing</li>
                    <li>Piano</li>
                    <li>Rock Climbing</li>
                    <li>CodeWars</li>
                </ul>
                </p>
                </section>
                </section>
            </div> 
        
    </div>
    <Footer></Footer>
    </div>
        
    )
}

export default About
