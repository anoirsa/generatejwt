import React from 'react'
import './button.css'
const Button = ({func}) => {
    return (
        <button className="btns" onClick={() => func()}>
            <p>GET VALID JWT</p>
        </button>
    )
}

export default Button
