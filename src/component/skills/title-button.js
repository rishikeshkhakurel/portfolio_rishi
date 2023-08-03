import React from 'react'
import { styled } from 'styled-components'

const ButtonStyled = styled.button`
background: transparent;
border: var(--black) 4px solid;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 127.9%; /* 38.37px */
letter-spacing: 10.661px;
padding: 8px 32px;

`

const TitleButton = (props) => {
  return (
    <ButtonStyled>{props?.children}</ButtonStyled>
  )
}

export default TitleButton