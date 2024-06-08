import React from "react";
import './FirstSlide.css';

function FirstSLide (){
    return(
        <div className="banner section">
            <div className="banner-content">
                <h1>
                Hey there
                <br /> 
                I'm Umashankar 
                <br />
                Front-end developer
                </h1>
                <p>Welcome to my portfolio site, i am Umashankar Sharma, a passionate developer with years of experience in web designing. </p>
                <button>CV</button>
                    
            </div>
            <div  className="banner-image-box">
                <img className="banner-img" src="./Images/banner_img.jpg" alt="" />
                

            </div>
        </div>
    )
}

export default FirstSLide;