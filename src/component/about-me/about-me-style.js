import { styled } from "styled-components";

const AboutMeStyled = styled.div`
position: relative;
width: 100%;
height: 100%;
overflow: hidden;


#background-color-black{
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 50%;
    transform: rotate(9.667deg);
    background: var(--black);
    z-index:10;

    @media screen and (max-width: 800px) {
        left: 0;
        transform: rotate(0);
    }
    
    img{
        transform: rotate(-9.667deg);
        max-height: 70%;
        position: absolute;
        bottom: 10%;
        left: 10%;
        object-fit: cover;
        @media screen and (max-width: 1200px) {
            left:0; 
            max-height: 60%;
        }
        @media screen and (max-width: 800px) {
            min-height:90%;
            width:100%;
            transform: rotate(0deg);
            bottom: 0;
            
        }
    }
}

#about-me-left{
    position: absolute;
    @media screen and (max-width: 800px) {
        bottom: -10%;
        left: -15%;
        z-index: 100;
        margin-top: 0;
        width: 1200px;
        height: 400px;
        background: rgba(215, 215, 215, 0.5);
        color: var(--white);
        transform: rotate(-20deg);
        #margin{
            transform: rotate(20deg);
            margin-left: 10%;
            margin-top: 17%;
        }
    }
    @media screen and (max-width: 500px) {
        #margin{
            margin-left: 6%;
        }
    }
    
}

#about-me-bottom{
    position: absolute;
    width: 100%;
    bottom:0;
    height:20%;
    background: linear-gradient(95deg, #1D1D1D 0%, #1D1D1D 100%, #1D1D1D 100%);
    z-index: 100;
    @media screen and (max-width: 800px) {
        display: none;
    }
}

`

export default AboutMeStyled;