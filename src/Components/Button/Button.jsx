import React from "react";
import { useNavigate } from "react-router-dom";
import './Button.css';

const Button = (props) => {
    let navigate = useNavigate();

    const sendMe = () => {
        navigate(props.url);
    }
    return (
        <div className="designButton" onClick={() => sendMe()}
            style={{
                backgroundColor: props.bgColor || '#8BE9FD',
                color: props.color || '#282A36',
                filter: props.selfReference === props.description ? `brightness(.85)` : undefined
            }}
        >
            {props.description}
        </div>
    )
}

export default Button;