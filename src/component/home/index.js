import React from 'react'
import AboutMe from '../about-me';
import Header from '../header';
import HomeStyled from './home-style';
import Skills from '../skills';
import Portfolio from '../portfolio';
import Contact from '../contact';

const Home = () => {
    const onScroll = (activeContainer) => {
        const element = document.getElementById(activeContainer);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    return (
        <HomeStyled>
            <Header handleMenuClick={onScroll} />
            <div id="about-me" className="container" >
                <AboutMe />
            </div>
            <div className='container' id="intro-home">
                <div id="intro">
                    <h2>Intro</h2>
                    <p>
                        Experienced Full-Stack Developer with a passion for crafting innovative web applications and solving real-world challenges. With over 2 years of expertise, I possess a holistic understanding of both front-end and back-end technologies, enabling seamless and user-friendly digital experiences. Thriving in fast-paced, high-tech environments, I excel in collaborating with cross-functional teams, embracing Agile methodologies for efficient project delivery. My strong problem-solving skills and adaptability to emerging technologies make me a valuable asset in dynamic projects. Committed to excellence, I constantly seek growth opportunities to stay at the forefront of the ever-evolving digital landscape. Let's connect and explore how my expertise can drive transformative solutions for your organization.
                    </p>
                </div>
            </div>
            <div id="skills" className="container">
                <Skills />
            </div>
            <div id="portfolio" className="container">
                <Portfolio />
            </div>
            <div id="contact" className="container">
                <Contact />
            </div>
        </HomeStyled>
    )
}

export default Home;