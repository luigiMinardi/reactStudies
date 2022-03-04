import React from "react";
import Button from "../Button/Button";
import './Header.css';

const Header = (props) => {

    return (
        <div className="designHeader">
            <Button description='Home' url='/' bgColor='#44475A' color='#F8F8F2' selfReference={props.selfReference} />
            <Button description='Login' url='/login' bgColor='#44475A' color='#F8F8F2' selfReference={props.selfReference} />
        </div>
    )
}

export default Header;