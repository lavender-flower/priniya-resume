import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div className='w lato ' style={{marginLeft:'10px'}} >
            <div className='bg-dark text-start text-light p ps pt po'>
                <h3>Contact</h3><hr></hr><div  className='text-end c'><small>Get in touch</small></div>
<div className='row text-center'>
<div className='col-lg-3 bc m b lllll'>
<FontAwesomeIcon className='c p' style={{fontSize:'50px'}} icon={faPhone} /><br></br>
<p>01878180573</p>
</div>
<div className='col-lg-3 bc m b lllll'>
<FontAwesomeIcon className='c p ' style={{fontSize:'50px'}} icon={faLocationDot} />
<p>Dhaka, Bangladesh</p>
</div>
<div className='col-lg-3 bc m b lllll'>
<FontAwesomeIcon className='c p' style={{fontSize:'50px'}} icon={faEnvelope} />
<p>ajmiriafrinpriniya@gmail.com</p>
</div>
</div>
<h3 className='pt'>Send me feedback</h3><hr></hr>
<div className='ps row' style={{paddingRight:'10vw'}}>
<div className='col-lg pt'>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Your Name</label>
  <input type="text" className="form-control bc text-light"  placeholder="your name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control bc text-light" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Subject</label>
  <input type="text" className="form-control bc text-light"  placeholder="Subject"/>
</div>

</div>
<div className="mb-3 col-lg pe pt">
  <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
  <textarea className="form-control bc text-light" id="exampleFormControlTextarea1" placeholder='message' rows="8"></textarea>
</div>
</div>
<div  className='pb-5 ps pt'>
<button type="button" class="btn ps pe btn-outline-light ">Send Message</button>
</div>
            </div>
            
            
        </div>
    );
};

export default Contact;