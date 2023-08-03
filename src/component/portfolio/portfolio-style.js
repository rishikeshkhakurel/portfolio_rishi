import { styled } from "styled-components";

const PortfolioStyle = styled.div`
#portfolio-image{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 5%;
    grid-gap: 2%;
    
    @media screen and (max-width: 1800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }

}

`;

export default PortfolioStyle;