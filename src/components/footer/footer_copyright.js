/**
 * Created by Maarten on 21-3-2016.
 */
import React from 'react'

const FooterCopyright = (props)=>{
    return(
        <div className="footer-copyright">
            <div className="container">
                Made by <a className="orange-text text-lighten-3" href={props.href}>{props.name}</a> {'\u00a9' + " " + props.year}
            </div>
        </div>
    );
};

export default FooterCopyright;