import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div class="wrapper lato">
    <div class="sidebar lato">
        <h3>Ajmiri Afrin Priniya</h3>
        
        <ul>
            
            <li><Link className='text-decoration-none text-start' to='/aboutme'><a >About Me</a></Link></li>
            <li><Link className='text-decoration-none text-start' to='/education'><a >Education</a></Link></li>
            <li><Link className='text-decoration-none text-start' to='/skills'><a >Skills</a></Link></li>
            <li><Link className='text-decoration-none text-start' to='/portfolio'><a >Portfolio</a></Link></li>
            <li><Link className='text-decoration-none text-start' to='/contact'><a >Contact</a></Link></li>

            
        </ul> 

    <div className='parent'>
   <div className='absolute'>
   <small className='text-secondary '>© 2024 All rights reserved.</small>
   </div>
    </div>
     
    </div>
   





</div>
        </div>
    );
};

export default Header;