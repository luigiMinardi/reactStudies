import React from "react";
import './Home.css';

import Button from '../../Components/Button/Button';
import Header from "../../Components/Header/Header";

const Home = (props) => {
    return (
        <div className="designHome">
            <Header className="header" selfReference='Home' />
            <section className="content">
                <p className="text">I'm Home</p>
                <Button description='Login' url='/login' />
            </section>
        </div>
    )
}

export default Home;