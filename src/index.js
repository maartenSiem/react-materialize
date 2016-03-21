/**
 * Created by Maarten on 24-2-2016.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import SectionContainer from './components/section/section_container';
import Footer from './components/footer/footer'



const App = ()=>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <SectionContainer/>
            <Footer/>
        </div>
    );
};


//Take the component generated HTM and put it om the page
ReactDOM.render(<App/>, document.querySelector('.container'));
