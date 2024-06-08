import React from 'react';

import './Footer.css';

function Footer(){
    return(
        <div className='footer section'>
            <div className='footer_info_box'>

                <p>Feel free to contact me</p>
                <a href="#"> <i class="fa-solid fa-phone"></i> +91 8076862747</a>
                <a href="#"> <i class="fa-solid fa-envelope"></i> ums8130@gmail.com</a>
                
                
                <div className='social_icon_box'>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter" ></i>
                </div>

            </div>
            

            {/* <p className='last_update_text'>Last Updated May 2024</p> */}
        </div>
    )
}

export default Footer;