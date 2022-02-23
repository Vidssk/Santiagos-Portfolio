import React from'react';
import './CSS/Button.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
const PAGES = ['/home', '/about','/projects', '/challenges', '/contact','/footer'];



export const Button = ({
    children,
    type,
    onClick,
    buttonLink,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkPageLink = PAGES.includes(buttonLink) ? buttonLink : PAGES[0];

    return (
        <Link to={checkPageLink} className='btn-mobile'>
            <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} type ={type}>
                {children}
            </button>
        </Link>
    )
};