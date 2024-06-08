import React from 'react';
import './AboutSlide.css'

function AboutSlide() {
    return(
        <div className='about_slide section'>

            <div className='about_img_box'>
                <img className='about_img' src="./Images/banner_img.jpg" alt="" />
            </div>
            <div className='about_content_box'>
                <h2>About Me!</h2>
                <p>
                I have always been passionate about websites and technology, so I learned web design and joined PreeDex Softwares LLP as a web designer. While working there, I gained a deeper understanding of website development and recognized further growth opportunities in this field. This inspired me to pursue a career as a developer. I gained the necessary skills and learned about web development. My hands-on experience with coding during my job made the learning process smoother and more engaging. 

                </p>
                <button>CV</button>
            </div>

        </div>
    )
}

export default AboutSlide;