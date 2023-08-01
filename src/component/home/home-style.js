import { styled } from "styled-components";

const HomeStyled = styled.div`

background: var(--gray-300);
width: 100%;
min-height: 100vh;
max-height: 100%;
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
export default HomeStyled