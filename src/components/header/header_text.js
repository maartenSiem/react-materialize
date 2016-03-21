/**
 * Created by Maarten on 19-3-2016.
 */
import React from 'react';

const HeaderText = (props)=>{
    return(
        <h1 className="header center orange-text">{props.text}</h1>
    );
};

export default HeaderText;