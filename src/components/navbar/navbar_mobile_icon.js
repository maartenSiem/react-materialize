/**
 * Created by Maarten on 19-3-2016.
 */
import React from 'react';

const NavbarMobileIcon = (props)=>{
  return(
      <a href="#" data-activates="nav-mobile" className="button-collapse">
          <i className="material-icons">{props.icon}</i>
      </a>
  );
};

export default NavbarMobileIcon;