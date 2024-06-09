import React from "react";

import './Home.css'

import Header from './Header';
import FirstSLide from "./FirstSlide";
import AboutSlide from "./AboutSlide";
import Experience from "./Experience";
import Skill from "./Skill";
import Project from "./Project";
import Footer from "./Footer";



function Home(){
    return(
        <div>
            <Header/>
            <FirstSLide/>            
            
            <AboutSlide/>
            <Experience/>
            <Skill/>            
            <Project/>
            <Footer/>

        </div>
        

    )
        
    
}

export default Home;