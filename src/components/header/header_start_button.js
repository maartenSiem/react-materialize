/**
 * Created by Maarten on 20-3-2016.
 */
import React from 'react';

const StartButton = (props)=>{
    return(
        <a href={props.href} id="download-button" className="btn-large waves-effect waves-light orange">{props.text}</a>
    );
};

export default StartButton;