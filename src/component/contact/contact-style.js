import { styled } from "styled-components";

const ContactStyle = styled.div`
height: 100%;
position: relative;
@media screen and (max-width: 700px) {
    height: calc(100% - 55px);
    margin-top: 64px;
}
form{
    width: 80%;
    max-width: 500px;
    margin:auto;
    margin-top: 5%;
    display:flex;
    flex-direction: column;
    font-size: 16px;
    font-family: Montserrat;

    @media screen and (max-height: 750px) {
        textarea{
            height:100px;
        }
    }

    input, textarea, button {
        margin-top: 7%;
        padding: 12px 16px;
        border: none;
        border-bottom-style: solid;
        border-left-style: solid;
        background: transparent;
        outline: 0;
    }

    
    #button-div{
        display:flex;
        width: 100%;
        justify-content:center;
        button{
            padding: 12px 32px;
            border: none;
            border-right-style: solid;
            border-left-style: solid;
            background: transparent;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 1.6px;
            cursor: pointer;
        }
    }
}

footer{
    background: var(--black);
    width:100%;
    height: 7vh;
    position: absolute;
    bottom: 0;

    #connect{
        display:flex;
        width: 100%;
        height: 100%;
        color: var(--white);
        align-items:center;
        justify-content:center;
        font-size: 24px;
        .icons{
            margin-left: 32px;

        }
    }
}

`;

export default ContactStyle;