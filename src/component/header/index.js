import Logo from '../../common/assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import HeaderStyled from './header-style';
import { useEffect, useState } from 'react';

const Header = ({ handleMenuClick }) => {
    const [menu, setMenu] = useState(false);

    const handleMenu = (name) => {
        setMenu(false);
        handleMenuClick(name);
    };

    const handleMenuToggle = (e) => {
        e.stopPropagation(); // Prevent event propagation to document
        setMenu((prevMenu) => !prevMenu);
    };

    const handleClickOutside = () => {
        setMenu(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <HeaderStyled >
            <div id="header-margin">
                <div id="logo">
                    <img alt='Logo' src={Logo} />
                </div>
                {menu ? <AiOutlineClose className="menu-icon" onClick={handleMenuToggle} /> : <IoMenu className="menu-icon" onClick={handleMenuToggle} />}
                <div id="menu">
                    <p onClick={() => handleMenu('about-me')}>About Me</p>
                    <p onClick={() => handleMenu('skills')}>Skills</p>
                    <p onClick={() => handleMenu('portfolio')}>Portfolio</p>
                    <button onClick={() => handleMenu('contact')}>Contact Me</button>
                </div>
            </div>
            {
                menu && (
                    <div id="menu-responsive" >
                        <p onClick={() => handleMenu('about-me')}>About Me</p>
                        <p onClick={() => handleMenu('skills')}>Skills</p>
                        <p onClick={() => handleMenu('portfolio')}>Portfolio</p>
                        <p onClick={() => handleMenu('contact')}>Contact Me</p>
                    </div>
                )}
        </HeaderStyled>
    )
}

export default Header