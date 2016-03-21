/**
 * Created by Maarten on 19-3-2016.
 */
import React from 'react';

const NavbarLinkItem = (props)=>{
  return(
      <li>
        <a href="#">{props.title}</a>
      </li>
  );
};

export default NavbarLinkItem;