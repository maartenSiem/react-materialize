/**
 * Created by Maarten on 19-3-2016.
 */
import React from 'react';
import NavbarLinkItem from './navbar_link_item';



const NavbarLinks = (props)=>{
    const createLink = (link, index)=>{
        return(
            <NavbarLinkItem key={link.title + index}  title={link.title} />
        );
    };
    return(
        <ul className="right hide-on-med-and-down">
            {props.navLinks.map(createLink)}
        </ul>
    );
};

export default NavbarLinks;