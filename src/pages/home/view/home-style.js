import { styled } from "styled-components";

const HomeStyled = styled.div`

background: var(--gray-300);
width: 100%;
min-height: 100vh;
max-height: 100%;
    .relative{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

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
        

    .container{
        height: calc(100vh - 56px);
        transition: margin 0.5s ease;
        padding-top: 56px;
        @media screen and (max-width: 700px) {
            height: calc(100vh - 52px);
            padding-top: 52px;
        }
    }


`
export const HeaderStyled = styled.div`
position: fixed;
width: 100%;
z-index: 1000;
background: var(--black);

//font
font-family: Montserrat;
text-align: center;
font-weight: 700;

p{
    color: var(--white);
    font-size: 17px;
    margin-right: 24px;
    cursor:pointer;
    padding: 8px 16px;
}
button{
    background: var(--white);
    color: var(--black);
    font-size: 15px;
    border-radius: 30px;
    border: 4px solid #FFF;
    background: #FFF;
    font-weight: 700;
    cursor:pointer;
}

#header-margin{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    padding: 10px 0;

    #logo{
        display: flex;
        align-items: center;
        img{
            height: 30px;
        }
    }

    .menu-icon{
        color: var(--white);
        font-size: 32px;
        cursor: pointer;
        display:none;    
        @media screen and (max-width: 700px) {
            display: block;    
        }
    }
    #menu{
        display: flex;
        justify-content: flex-end;
        @media screen and (max-width: 700px) {
            display:none;    
        }
    }

    
}
#menu-responsive{
    color: var(--white);
    p{
        background: rgba(89,89,89,0.4);
        margin: 0;
        padding: 16px 12px;
        &:hover{
            background: rgba(0,0,0,0.4);

        }
    }
}
`
export default HomeStyled