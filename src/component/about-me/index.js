import React from 'react'
import Rishi from '../../common/assets/rishi.png'
import AboutMeStyled from './about-me-style'


const AboutMe = () => {
    return (
        <AboutMeStyled>
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
        </AboutMeStyled>
    )
}

export default AboutMe