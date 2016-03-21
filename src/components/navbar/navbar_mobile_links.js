/**
 * Created by Maarten on 19-3-2016.
 */
import React from 'react';
import MobileLinkItem from './navbar_mobile_link_item';

const MobileLinks = (props)=>{
    const createLink = (link, index)=>{
        return(
            <MobileLinkItem key={link.title + index}  title={link.title} />
        );
    };
    return(
        <ul id="nav-mobile" className="side-nav">
            {props.mobileNavLinks.map(createLink)}
        </ul>
    );
};

export default MobileLinks;