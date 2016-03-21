/**
 * Created by Maarten on 21-3-2016.
 */
import React from 'react'
import FooterLink from './footer_link';



const FooterLinks = (props)=>{
    const createLink = (item, index)=>{
        return(
            <FooterLink key={item.link + index} link={item.link} />
        );
    };
    return(
        <div className="col l3 s12">
            <h5 className="white-text">{props.title}</h5>
            <ul>
                {props.links.map(createLink)}
            </ul>
        </div>
    );
};

export default FooterLinks;