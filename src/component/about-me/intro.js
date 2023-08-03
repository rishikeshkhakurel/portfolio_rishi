import { useState } from "react";
import { IntroStyled } from "./about-me-style";

export const Intro = ({display}) => {
    const introText = "Experienced Full-Stack Developer with a passion for crafting innovative web applications and solving real-world challenges. With over 2 years of expertise, I possess a holistic understanding of both front-end and back-end technologies, enabling seamless and user-friendly digital experiences. Thriving in fast-paced, high-tech environments, I excel in collaborating with cross-functional teams, embracing Agile methodologies for efficient project delivery. My strong problem-solving skills and adaptability to emerging technologies make me a valuable asset in dynamic projects. Committed to excellence, I constantly seek growth opportunities to stay at the forefront of the ever-evolving digital landscape. Let's connect and explore how my expertise can drive transformative solutions for your organization."
    const [showFullText, setShowFullText] = useState(false);

    const handleClick = () => {
        setShowFullText(!showFullText);
    };
    return (
        <IntroStyled showFullText={showFullText} display={display} >
            <div id="intro">
                <h2>Intro</h2>
                <p>
                    {showFullText ? introText : `${introText.split(' ').slice(0, 50).join(' ')}...`}
                    <span className='see-more' onClick={handleClick} >
                        {showFullText ? 'See less' : 'See more'}
                    </span>
                </p>

            </div>
        </IntroStyled>
    )
}