/**
 * Created by Maarten on 20-3-2016.
 */
import React from 'react';
import Section from './section';

const Sections = (props)=>{
    const createSection = (item,index)=>{
        return(
           <Section key={item.text + index} icon={item.icon} header={item.header} text={item.text} />
        );
    };
    return(
            <div className="section">
                <div className="row">
                    {props.sectionContent.map(createSection)}
                </div>
            </div>
    );
};

export default Sections;