/**
 * Created by Maarten on 19-3-2016.
 */
import React from 'react';

const NavbarLogo = (props)=>{
    return(
        <a id="logo-container" href="#" className="brand-logo">{props.logo}</a>
    );
};

export default NavbarLogo;