import React from 'react'
import Rishi from '../../common/assets/rishi.png'
import AboutMeStyled from './about-me-style'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { Intro } from './intro';
import { Link } from 'react-router-dom';

const AboutMe = () => {

    return (
        <AboutMeStyled>
            <div id="about-me-left">
                <div id="name-title-connect">
                    <h2 id="greeting">Hi, I am</h2>
                    <h1 id="name">Rishikesh Khakurel</h1>
                    <h2 id="title-position">MERN Full Stack Developer</h2>
                    <div id="connect">
                        <Link to='https://github.com/rishikeshkhakurel'>
                            <AiFillGithub className='icons' />
                        </Link>
                        <Link to='https://www.linkedin.com/in/rishikesh-khakurel-bb5b22215/'>
                            <AiFillLinkedin className='icons' />
                        </Link>
                        <Link to='mailto:khakurel.rishikesh1@gmail.com'>
                            <AiFillMail className='icons' />
                        </Link>
                    </div>
                </div>
            </div>
            <div id="background-color-black" >
                <img src={Rishi} alt='Rishi' />
            </div>
            <div id="intro-display">
                <Intro display={false} />
            </div>
        </AboutMeStyled>
    )
}

export default AboutMe