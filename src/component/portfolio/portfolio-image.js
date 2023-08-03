import React from 'react'
import { styled } from 'styled-components'

const PortfolioImageStyle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
img{
    max-height: 300px;
    width: auto;
    @media screen and (max-width: 1300px) {
        max-height: 200px;
    }
    @media screen and (max-height: 900px) {
        max-height: 150px;
    }
}

.name{
    margin-top: 16px;
    p{
        font-family: Raleway;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 3.249px;
    }
}

`
const PortfolioImage = ({ image, name }) => {
  return (
    <PortfolioImageStyle>
      <img src={image} alt={name} />
      <div className='name'>
        <p >{name}</p>
      </div>
    </PortfolioImageStyle>
  )
}

export default PortfolioImage