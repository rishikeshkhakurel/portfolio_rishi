import React, { useEffect, useState } from 'react'
import HomeStyled, { HeaderStyled } from './home-style'
import Logo from '../../../common/assets/logo.png'
import Rishi from '../../../common/assets/rishi.png'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({ handleMenuClick }) => {
    const [menu, setMenu] = useState(false);
    return (
        <HeaderStyled >
            <div id="header-margin">
                <div id="logo">
                    <img alt='Logo' src={Logo} />
                </div>
                {menu ? <AiOutlineClose className="menu-icon" onClick={() => setMenu(false)} /> : <IoMenu className="menu-icon" onClick={() => setMenu(true)} />}
                <div id="menu">
                    <p onClick={() => handleMenuClick(1)}>About Me</p>
                    <p onClick={() => handleMenuClick(2)}>Skills</p>
                    <p onClick={() => handleMenuClick(3)}>Portfolio</p>
                    <button onClick={() => handleMenuClick(4)}>Contact Me</button>
                </div>
            </div>
            {
                menu && <div id="menu-responsive">
                    <p onClick={() => handleMenuClick(1)}>About Me</p>
                    <p onClick={() => handleMenuClick(2)}>Skills</p>
                    <p onClick={() => handleMenuClick(3)}>Portfolio</p>
                    <p onClick={() => handleMenuClick(4)}>Contact Me</p>
                </div>
            }
        </HeaderStyled>
    )
}

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
                <div className='relative'>
                    <div id="about-me-left">
                        <div id="margin">
                            <h2>Hi, I am</h2>
                            <h1>Rishikesh Khakurel</h1>
                            <h2>MERN Full Stack Developer</h2>
                        </div>
                    </div>
                    <div id="background-color-black" >
                        <img src={Rishi} alt='Rishi' />
                    </div>
                    <div id="about-me-bottom">

                    </div>
                </div>
            </div>
            <div id="2" className="container">Skills</div>
            <div id="3" className="container">Portfolio</div>
            <div id="4" className="container">Contact Me</div>
        </HomeStyled>
    )
}

export default Home