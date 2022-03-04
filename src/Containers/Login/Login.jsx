import React from "react";
import './Login.css';

import Button from '../../Components/Button/Button';
import Header from "../../Components/Header/Header";

const Login = () => {
    return (
        <div className="designLogin">
            <Header className="header" />
            <section className="content">
                <p className="text">I'm Login</p>
                <Button description='Home' url='/' bgColor='#FFB86C' />
            </section>
        </div>
    )
}

export default Login;