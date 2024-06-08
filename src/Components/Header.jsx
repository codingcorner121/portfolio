import React from 'react';
import './Header.css';

function Header(){
    return(
    <div className='header section'>
        <h1>Umashankar</h1>
        <ul className='menu'>
            <li><a className='menu-link' href="#">Home</a></li>
            <li><a className='menu-link' href="#">About</a></li>
            <li><a className='menu-link' href="#">Experience</a></li>
            <li><a className='menu-link' href="#">Project</a></li>
            <li><a className='menu-link' href="#">Blog</a></li>

        </ul>
        <button>CONTACT</button>
        <i class="bar_menu fa-solid fa-bars"></i>

    </div>
    )
}

export default Header;