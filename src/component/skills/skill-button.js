import React from 'react'
import { styled } from 'styled-components'

const SkillButtonStyle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
img{
    max-height: 80px;
    width: auto;
    @media screen and (max-width: 400px) {
        height: 60px;
    }
    @media screen and (max-height: 700px) {
        height: 50px;
    }
    @media screen and (max-height: 650px) {
        height: 40px;
    }
    @media screen and (max-height: 550px) {
        height: 30px;
    }
}

.name{
    margin-top: 16px;
    p{
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 3.249px;
    }
}

`

const SkillButton = ({ name, image }) => {
    return (
        <SkillButtonStyle>
            <img src={image} alt={name} />
            <div className='name'>
                <p >{name}</p>
            </div>
        </SkillButtonStyle>
    )
}

export default SkillButton