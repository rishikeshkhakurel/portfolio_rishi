import { styled } from "styled-components";

const SkillsStyle = styled.div`
height: 100%;
    #skill-list{
        width: 50%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 10%;
        grid-gap: 15%;
        @media screen and (max-width: 800px) {
            width: 80%;
        }
        @media screen and (max-width: 700px) {
            grid-gap: 5%;
            grid-template-columns: repeat(2, 1fr);
        }
    }

`;

export default SkillsStyle;