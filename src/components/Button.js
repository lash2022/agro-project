import React from "react";
import './Button.css'
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline','btn--test']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonStyle : SIZES[0]

    return (
        <Link to={'/contact'} className = 'btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {onclick} type = {type}
            >
                {children}
            </button>
        </Link>
    )
}
export default Button