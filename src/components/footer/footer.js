/**
 * Created by Maarten on 20-3-2016.
 */
import React from 'react';
import FooterCopyright from './footer_copyright';
import FooterBio from './footer_bio';
import FooterLinks from './footer_links';

const bioText = "I am a React-enthousiast who makes React-components for fun. " +
    "Any amount would help support and continue development on this project and is greatly appreciated.";

const linkFooter = [
    {
        link: "Link1"
    },
    {
        link: "Link2"
    },
    {
        link: "Link3"
    },
    {
        link: "Link4"
    }
];

const Footer = (props)=>{
    return(
        <footer className="page-footer orange">
            <div className="container">
                <div className="row">
                    <FooterBio title="My Biography" text={bioText} />
                    <FooterLinks links={linkFooter} title="Settings"/>
                    <FooterLinks links={linkFooter} title="Connect"/>
                </div>
            </div>
            <FooterCopyright href="http://www.github.com/maartenSiem" name="Maarten Siem" year="2016"/>
        </footer>
    );    
};

export default Footer;
