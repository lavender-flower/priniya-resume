import React from 'react';
import './../all.css'
import { faFacebook, faGithub, faInstagram, faLinkedin, faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Aboutme.css'

const Aboutme = () => {
    return (
        <div>
 
        <div className='w  lato ' style={{marginLeft:'20px'}} >
         <div className='bg-dark text-light ps pt text-start po row'>
           <div className=' col-lg ps pt'> <img className='llll' src='./images/profile.png'  style={{width:'30vw'}}></img></div>
      <div className='col-lg pt-3 '>
      <h1> I Am Ajmiri Afrin Priniya</h1>
    <p className='c'>As a recent graduate with a major in Data Science and a passion for creative design, my career objective is to leverage my
analytical and programming skills to extract meaningful insights from data, while also contributing my creative talents in
web design ,graphics and UI/UX design to create visually compelling and user-friendly solutions.<br></br>
<br></br>
 I aim to work in a dynamic and
innovative environment where I can apply my technical expertise in data science to solve real-world problems, and at the
same time, collaborate with cross-functional teams to design and develop aesthetically pleasing and intuitive user
interfaces. I am committed to continuous learning and staying updated with the latest advancements in both 
design and data science, with the goal of making a significant impact in the fields of technology and user experience</p>

<div className='d-flex ps t'>
<div className='l'><div className='ll'><a className='c lll ' href='https://www.facebook.com/iampriniya/'><FontAwesomeIcon style={{fontSize:'30px'}} icon={faFacebook} /></a></div></div>
<div className='l'><div className='ll'><a className='c lll ' href='https://www.instagram.com/ajmiripriniya?igsh=czU2aWwzOGlrNjds'><FontAwesomeIcon style={{fontSize:'30px'}} icon={faInstagram} /></a></div></div>
<div className='l'><div className='ll'><a className='c lll ' href='https://www.linkedin.com/in/ajmiri-afrin-priniya-b8a0bb287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwZXh0bgNhZW0CMTAAAR3rLy2FlhJyZbQF4wyiD6fCKih8C7U2G3Npz48lDuxshed9AFrMG9WIQto_aem_FBdxn85CfQasCyLcqwPF5w&original_referer=https%3A%2F%2Fl.facebook.com%2F'><FontAwesomeIcon style={{fontSize:'30px'}} icon={faLinkedin} /></a></div></div>
<div className='l'><div className='ll'><a className='c lll ' href='https://github.com/lavender-flower?tab=repositories'><FontAwesomeIcon style={{fontSize:'30px'}} icon={faGithub} /></a></div></div>
<div className='l'><div className='ll'><a className='c lll ' href='https://www.behance.net/ajmiripriniya'><FontAwesomeIcon style={{fontSize:'30px'}} icon={faSquareBehance} /></a></div></div>


</div>

      </div>

         </div>
        </div>
        </div>
    );
};

export default Aboutme;