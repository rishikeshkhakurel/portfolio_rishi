import { styled } from "styled-components"

const HeaderStyled = styled.div`
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
    margin-right: 24px;
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

export default HeaderStyled