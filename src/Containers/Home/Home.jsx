import React, { useEffect } from "react";
import './Home.css';

import Button from '../../Components/Button/Button';
import Header from "../../Components/Header/Header";
import { connect } from "react-redux";
import { IS_HOME } from "../../redux/actions";

const Home = (props) => {

    useEffect(() =>{
        props.dispatch({ type: IS_HOME })
    },[])

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

export default connect()(Home);