import React, { useEffect, useState } from 'react'
import PortfolioStyle from './portfolio-style'
import TitleButton from '../skills/title-button'
import Bhariya from '../../common/assets/portfolio/bhariya-login.png'
import GHCA from '../../common/assets/portfolio/ghca.png'
import IMS from '../../common/assets/portfolio/ims.png'
import KidsCare from '../../common/assets/portfolio/kids-care.png'
import OETTA from '../../common/assets/portfolio/oetta.png'
import TechChannel from '../../common/assets/portfolio/technology-channel.png'
import PortfolioImage from './portfolio-image'

const Portfolio = () => {
    const [isMedScreen, setIsMedScreen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const isMed = window.matchMedia('(max-width: 1800px) and (min-width: 700px)').matches;
            const isSmall = window.matchMedia('(max-width: 700px)').matches;
            setIsMedScreen(isMed);
            setIsSmallScreen(isSmall);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);
    return (
        <PortfolioStyle>
            <div id="title">
                <TitleButton>Portfolio</TitleButton>
            </div>
            <div id="portfolio-image">
                {(!isMedScreen && !isSmallScreen) && (
                    <>
                        <PortfolioImage image={IMS} name='Ims' />
                        <PortfolioImage image={GHCA} name='GHCA' />
                        <PortfolioImage image={Bhariya} name='Bhariya' />
                        <PortfolioImage image={TechChannel} name='Technology Channel Tools' />
                        <PortfolioImage image={KidsCare} name='Kids Care' />
                        <PortfolioImage image={OETTA} name='OE-TTS' />
                    </>
                )}
                {isMedScreen && (
                        <>
                            <PortfolioImage image={IMS} name='Ims' />
                            <PortfolioImage image={TechChannel} name='Technology Channel Tools' />
                            <PortfolioImage image={KidsCare} name='Kids Care' />
                            <PortfolioImage image={Bhariya} name='Bhariya' />
                            <PortfolioImage image={GHCA} name='GHCA' />
                            <PortfolioImage image={OETTA} name='OE-TTS' />
                        </>
                    )}
                {isSmallScreen && (
                        <>
                            <PortfolioImage image={IMS} name='Ims' />
                            <PortfolioImage image={TechChannel} name='Technology Channel Tools' />
                            <PortfolioImage image={Bhariya} name='Bhariya' />
                            <PortfolioImage image={KidsCare} name='Kids Care' />
                            <PortfolioImage image={GHCA} name='GHCA' />
                            <PortfolioImage image={OETTA} name='OE-TTS' />
                        </>
                    )}

            </div>
        </PortfolioStyle>
    )
}

export default Portfolio