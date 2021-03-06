/**
 * Created by Maarten on 20-3-2016.
 */
import React from 'react';
import Sections from './sections';

const sectionContent = [
    {
        icon: "flash_on",
        header: "Speeds up development",
        text: "We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. " +
        "Additionally, we refined animations and transitions to provide a smoother experience for developers."
    },
    {
        icon: "group",
        header: "User Experience Focused",
        text: "By utilizing elements and principles of Material Design, we were able to create a framework that " +
        "incorporates components and animations that provide more feedback to users. Additionally, a single underlying " +
        "responsive system across all platforms allow for a more unified user experience."

    },
    {
        icon: "settings",
        header: "Easy to work with",
        text: "We have provided detailed documentation as well as specific code examples to help new users get started." +
        "We are also always open to feedback and can answer any questions a user may have about Materialize."
    }
];

const SectionContainer = ()=>{
    return(
        <div className="container">
            <Sections sectionContent={sectionContent}/>
        </div>
    );
};

export default SectionContainer;