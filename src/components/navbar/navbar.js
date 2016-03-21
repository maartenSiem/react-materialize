/**
 * Created by Maarten on 19-3-2016.
 */
import React from 'react';
import NavbarLogo from './navbar_logo';
import NavbarLinks from './navbar_links';
import MobileLinks from './navbar_mobile_links';
import NavbarMobileIcon from './navbar_mobile_icon';

const links = [
    {title: "Home"},
    {title: "Services"},
    {title: "About us"}
];

const Navbar = ()=>{
    return(
        <nav className="light-blue lighten-1" role="navigation">
            <div className="nav-wrapper container">
                <NavbarLogo logo="My Brand"/>
                <NavbarLinks navLinks={links}/>
                <MobileLinks mobileNavLinks={links}/>
                <NavbarMobileIcon icon="menu" />
            </div>
        </nav>
    );
};

export default Navbar;