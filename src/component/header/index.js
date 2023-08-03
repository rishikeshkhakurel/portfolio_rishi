import Logo from '../../common/assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import HeaderStyled from './header-style';
import { useState } from 'react';

const Header = ({ handleMenuClick }) => {
    const [menu, setMenu] = useState(false);
    return (
        <HeaderStyled >
            <div id="header-margin">
                <div id="logo">
                    <img alt='Logo' src={Logo} />
                </div>
                {menu ? <AiOutlineClose className="menu-icon" onClick={() => setMenu(false)} /> : <IoMenu className="menu-icon" onClick={() => setMenu(true)} />}
                <div id="menu">
                    <p onClick={() => handleMenuClick('about-me')}>About Me</p>
                    <p onClick={() => handleMenuClick('skills')}>Skills</p>
                    <p onClick={() => handleMenuClick('portfolio')}>Portfolio</p>
                    <button onClick={() => handleMenuClick('contact')}>Contact Me</button>
                </div>
            </div>
            {
                menu && <div id="menu-responsive">
                    <p onClick={() => handleMenuClick('about-me')}>About Me</p>
                    <p onClick={() => handleMenuClick('skills')}>Skills</p>
                    <p onClick={() => handleMenuClick('portfolio')}>Portfolio</p>
                    <p onClick={() => handleMenuClick('contact')}>Contact Me</p>
                </div>
            }
        </HeaderStyled>
    )
}

export default Header