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
    height: 80%;
    width: 50%;
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
        #name-title-connect{
            transform: rotate(20deg);
            margin-left: 10%;
            margin-top: 17%;
        }
    }

    #connect{
        margin-top: 64px;
        .icons{
            margin-right: 16px;
            font-size: 32px;
            background-color: var(--gray-400);
            padding: 8px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            cursor: pointer;
        }
        @media screen and (max-width: 800px) {
            disply: nonee;
        }
    }

    @media screen and (min-width: 800px) {
        #name-title-connect{
            display:flex;
            height:100%;
            flex-direction: column;
            justify-content: center;
            margin-left: 10%;

            h1{
                margin-top: 24px; 
            }
            h2{
                margin-top: 12px;
            }
            #title-position{
                color: #909090;
            }
        }
    }

    @media screen and (max-width: 500px) {
        #name-title-connect{
            margin-left: 6%;
        }
    }
    
}

#intro-display{
    @media screen and (max-width: 800px) {
        display: none;
    }
}

`
export default AboutMeStyled;


export const IntroStyled = styled.div`
@media screen and (max-width: 1500px) {
    height:${props => props.showfulltext && '30% !important'}
    }
    @media screen and (max-width: 1000px) {        
        height:${props => props.showfulltext && '35% !important'}
}
    position: absolute;
    width: 100%;
    bottom:0;
    height:20%;
    background: linear-gradient(95deg, #1D1D1D 0%, #1D1D1D 100%, #1D1D1D 100%);
    color: var(--white);
    z-index: 100;

    #intro{
    width: 80%;
    height: 100%;
    margin: auto;
    display:flex;
    flex-direction: column;
    justify-content:center;
        p{
            margin-top: 16px;
            font-family: Open Sans;
            font-size: 15px;
            line-height: 22px;
            .see-more{
                color: var(--gray-500);
                cursor: pointer;
            }
        }
    }
}

`
