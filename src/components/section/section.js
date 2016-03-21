/**
 * Created by Maarten on 20-3-2016.
 */
import React from 'react';

const Section = (props)=>{
    return(
        <div className="col s12 m4">
            <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">{props.icon}</i></h2>
                <h5 className="center">{props.header}</h5>
                <p className="light">{props.text}</p>
            </div>
        </div>
    );
};

export default Section;