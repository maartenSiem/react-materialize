/**
 * Created by Maarten on 21-3-2016.
 */
import React from 'react'

const FooterBio = (props)=>{
    return(
        <div className="col l6 s12">
            <h5 className="white-text">{props.title}</h5>
            <p className="grey-text text-lighten-4">{props.text}</p>
        </div>
    );
};

export default FooterBio;