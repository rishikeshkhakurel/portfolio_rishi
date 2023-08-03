import { styled } from "styled-components";

const HomeStyled = styled.div`
background: var(--gray-300);
width: 100%;
min-height: 100vh;
max-height: 100%;
    #about-me{
        height: calc(100vh - 56px) !important;
        padding-top: 56px !important;
        @media screen and (max-width: 700px) {
            height: calc(100vh - 52px) !important;
            padding-top: 52px !important;
        }
    }

    #portfolio{
        height: 100%;
    }
    .container{
        height: calc(100vh - 112px);
        transition: margin 0.5s ease;
        padding-top: 112px;
        
        @media screen and (max-width: 700px) {
            height: calc(100vh - 104px);
            padding-top: 104px;
        }
    }
    

    #intro-home{
    @media screen and (min-width: 800px) {
        display: none;
    }
    @media screen and (max-width: 800px) {
        height: 40vh !important;
    }
    @media screen and (max-width: 600px) {
        height: 50vh !important;
    }
    @media screen and (max-width: 450px) {
        height: 60vh !important;
    }
    @media screen and (max-width: 450px) {
        height: 60vh !important;
    }
    @media screen and (max-width: 450px) {
        height: 80vh !important;
    }
    @media screen and (max-width: 350px) {
        height: 90vh !important;
    }
    @media screen and (max-width: 250px) {
        height: 100vh !important;
    }
    width: 100%;
    background: linear-gradient(95deg, #1D1D1D 0%, #1D1D1D 100%, #1D1D1D 100%);
    color: var(--white);

    #intro{
    width: 80%;
    height: 100%;
    margin: auto;
    flex-direction: column;
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

    #title{
        display:flex;
        width:100%;
        justify-content:center;
    }


`
export default HomeStyled