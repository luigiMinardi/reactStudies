import React, { useEffect, useState } from "react";
import axios from "axios";
import './Login.css';

import Button from '../../Components/Button/Button';
import Header from "../../Components/Header/Header";

const Login = () => {

    const [credentials, setCredentials] = useState("");

    useEffect(() => {
        console.log('Created')
    }, [])

    useEffect(() => {
        console.log(credentials, 'Updated')
    })

    const fakeLogin = async () => {
        let body = {
            email: "test@mail.com",
            password: "1234"
        }

        try {
            let result = await axios.post('http://localhost:5500/users/login', body);

            setCredentials(result.data);
        } catch (e) {
            console.log(e);
        }
    }
    if (credentials?.token !== undefined) {
        return (
            <div className="designLogin">
                <Header className="header" selfReference='Login' />
                <section className="content">
                    <p>Welcome {credentials.user.name}! Your token is:</p>
                    <p className="text">{credentials.token}</p>
                </section>
            </div>
        )
    } else {
        return (
            <div className="designLogin">
                <Header className="header" selfReference='Login' />
                <section className="content">
                    <p className="text">I'm Login</p>
                    <Button description='Home' url='/' bgColor='#FFB86C' /> <br />
                    <div className='designButton' onClick={() => fakeLogin()}> Login</div>
                </section>
            </div>
        )
    }

}

export default Login;