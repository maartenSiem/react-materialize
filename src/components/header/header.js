/**
 * Created by Maarten on 19-3-2016.
 */
import React from 'react';
import HeaderText from './header_text';
import SecondaryText from './header_text_secondairy';
import StartButton from './header_start_button';

const Header = ()=>{
    return(
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                    <HeaderText text="React-Materialize" />
                <div className="row center">
                    <SecondaryText text="A starter design build with React Components"/>
                </div>
                <div className="row center">
                    <StartButton href="http://github.com/maartenSiem" text="View Source Code" />
                </div>
            </div>
        </div>
    );
};

export default Header;