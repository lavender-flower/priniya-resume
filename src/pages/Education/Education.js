import React from 'react';

const Education = () => {
    return (
        <div className='w lato' style={{marginLeft:'20px'}} >
            <div className='bg-dark text-light text-start po p row'>
                <div className='col-lg ps pt'><img className='llll' src='./images/graduate.png' style={{width:'30vw'}}></img></div>
                <div className='col-lg'><div className='p '>
                    <h2>Education</h2>
                    <p className='c'>All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.</p>
                </div><hr></hr>
                <div className='text-start ps'>
                    <h5>East West University, Dhaka, Bangladesh</h5>
                    <p className='c '>Bachelor of Science in Computer Science and Engineering<br/>major in Data Science <br></br>2019-2023 (Spring 19 Batch)</p>
                    
                     
                </div>
                <div className='text-start ps'>
             <h5>Dhaka Cantonment Girls' Public School & College</h5>
                    <p className='c'>Higher Secondary School Certificate <br></br>2016-2018</p>
                     
                </div>
                <div className='text-start ps '>
                 <h5>Gouripur Subal Aftab High School</h5>
                    <p className='c'>Secondary School Certificate <br></br>2014-2016</p>
                     
                </div></div>


            </div>
            
        </div>
    );
};

export default Education;