import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Portfolio = () => {
    return (
        <div className='w lato'>
            <div className='bg-dark pt ps p text-light text-start po'>
            <div className='pt ps'>
                <h3 className='pt'>My Sites</h3><hr></hr>
                <div  className='p' style={{fontSize:'1vw'}}>
              <a href='https://plantous.netlify.app/' className='text-decoration-none text-light lllll'>
              <div className='d-flex t' >
                        <img src='./images/4.jpg' width='150px' height='100px'></img>
                     <div className='ps'>
                     <p>Plant Shop Site</p>
                     <p>Plantous</p>
                     <p>ReactJs, HTML, CSS, Bootstrap</p>
                     </div>
                     <div className='text-center c' style={{paddingLeft:'180px'}}>
                        <p style={{paddingTop:'15px'}}>Owned By</p>
                        <p>Priniya</p>
                     </div>
                     <div style={{paddingLeft:'300px',paddingTop:'40px'}}>
                     <FontAwesomeIcon style={{fontSize:'2vw'}} icon={faCaretRight} />
                     </div>
                    </div>
              </a>
                
                <a href='https://tour-bird.netlify.app/' className='text-decoration-none text-light lllll'>
                <div className='d-flex  t'>
                        <img src='./images/1.jpg' width='150px' height='100px'></img>
                     <div className='ps'>
                     <p>Travel Agency Site</p>
                     <p>Tour Bird</p>
                     <p>ReactJs,HTML,CSS,Bootstrap</p>
                     </div>
                     <div className='text-center c' style={{paddingLeft:'180px'}}>
                        <p style={{paddingTop:'15px'}}>Owned By</p>
                        <p>Priniya</p>
                     </div>
                     <div style={{paddingLeft:'300px',paddingTop:'40px'}}>
                     <FontAwesomeIcon style={{fontSize:'2vw'}} icon={faCaretRight} />
                     </div>
                    </div>
                </a>

                <a href='https://online-learning-site.netlify.app/' className='text-decoration-none text-light lllll'>
                <div className='d-flex t'>
                        <img src='./images/2.jpg' width='150px' height='100px'></img>
                     <div className='ps'>
                     <p>E Learning Course Site</p>
                     <p>Online Learn </p>
                     <p>ReactJs,HTML,CSS,Bootstrap</p>
                     </div>
                     <div className='text-center c' style={{paddingLeft:'180px'}}>
                        <p style={{paddingTop:'15px'}}>Owned By</p>
                        <p>Priniya</p>
                     </div>
                     <div style={{paddingLeft:'300px',paddingTop:'40px'}}>
                     <FontAwesomeIcon style={{fontSize:'2vw'}} icon={faCaretRight} />
                     </div>
                    </div>
                </a>

               <a href='https://humankind-medicare.netlify.app' className='text-decoration-none text-light lllll'>
               <div className='d-flex t'>
                        <img src='./images/3.jpg' width='150px' height='100px'></img>
                     <div className='ps'>
                     <p>Health Care Service Site</p>
                     <p>Humankind Medicare</p>
                     <p>ReactJs,HTML,CSS,Bootstrap</p>
                     </div>
                     <div className='text-center c' style={{paddingLeft:'180px'}}>
                        <p style={{paddingTop:'15px'}}>Owned By</p>
                        <p>Priniya</p>
                     </div>
                     <div style={{paddingLeft:'300px',paddingTop:'40px'}}>
                     <FontAwesomeIcon style={{fontSize:'2vw'}} icon={faCaretRight} />
                     </div>
                    </div>
               </a>

                 <a href='https://honda-cbr-bootstrap-of-lavender.netlify.app' className='text-decoration-none text-light lllll'>
                    
                 <div className='d-flex t'>
                        <img src='./images/5.jpg' width='150px' height='100px'></img>
                     <div className='ps'>
                     <p>Simple Bike Shop</p>
                     <p>Simple Design</p>
                     <p>HTML, CSS, Bootstrap</p>
                     
                     </div>
                     <div className='text-center c' style={{paddingLeft:'225px'}}>
                        <p style={{paddingTop:'15px'}}>Owned By</p>
                        <p>Priniya</p>
                     </div>
                     <div style={{paddingLeft:'300px',paddingTop:'40px'}}>
                     <FontAwesomeIcon style={{fontSize:'2vw'}} icon={faCaretRight} />
                     </div>
                    </div>
                 </a>

                 <a href='https://mac-book-shopsite-using-js.netlify.app' className='text-decoration-none text-light lllll'>
                 <div className='d-flex t'>
                        <img src='./images/6.jpg' width='150px' height='100px'></img>
                     <div className='ps'>
                     <p>Simple Cart Page</p>
                     <p>Simple Design</p>
                     <p>Javascript, HTML, CSS, Bootstrap</p>
                     
                     </div>
                     <div className='text-center c' style={{paddingLeft:'150px'}}>
                        <p style={{paddingTop:'15px'}}>Owned By</p>
                        <p>Priniya</p>
                     </div>
                     <div style={{paddingLeft:'300px',paddingTop:'40px'}}>
                     <FontAwesomeIcon style={{fontSize:'2vw'}} icon={faCaretRight} />
                     </div>
                    </div>

                 </a>

 
                </div>
                
                
            </div>
            </div>
            
        </div>
    );
};

export default Portfolio;