import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Contact.css'
import Footer from './Footer'
import EmailForm from '../EmailForm'



function Contact() {
    return (
        <div className="contact-container">
            <section className="contact-subscription">
                
                <p className="contact-subscription-heading">
                    "Always find ways to improve"
                </p>
                
                <p className="contact-subscription-text">
                    Get in touch
                </p>
                <p style={{color: "#fff", paddingBottom: "10px"}}>Email: santiagohernandez120199@gmail.com</p>
                
                    <div className="input-areas">
                        <EmailForm/>
                    </div>
                
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Contact
