import React, { useEffect, useState } from 'react'
import AboutMe from '../about-me';
import Header from '../header';
import HomeStyled from './home-style';

const Home = () => {
    const [activeContainer, setActiveContainer] = useState(1);

    useEffect(() => {
        const element = document.getElementById(activeContainer);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [activeContainer])

    return (
        <HomeStyled>
            <Header handleMenuClick={setActiveContainer} />
            <div id="1" className="container" >
                <AboutMe />           
            </div>
            <div id="2" className="container">Skills</div>
            <div id="3" className="container">Portfolio</div>
            <div id="4" className="container">Contact Me</div>
        </HomeStyled>
    )
}

export default Home