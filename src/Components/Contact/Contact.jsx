import React, { useState } from 'react'
import './Contact.css'
import Titiles from '../Titiles/Titiles';
import '../../App.css';
import { CiMail } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IoPlayBackOutline } from "react-icons/io5";


const Contact = () => {
      const [result, setResult] = useState("");

        const navigate = useNavigate();
          const goToAbout = () => {
          navigate("/"); // 👈 navigate to the About page
        };
  
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5132c415-39c0-479b-9a16-779ded8af07c");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div className='container contact'>
          <div className="text-end d-lg-none d-block">
                        <small onClick={goToAbout}> <span><IoPlayBackOutline /></span> Back</small>
                      </div>
      <div className="pb-2">
                       <Titiles maintitle="Contact" />
          </div>

          <div className="pt-4">
            
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="contact-col">
                            <h4>Send Us  a  Message <MdOutlineMessage style={{color:'gold'}} /></h4>
                            <p>I'm a frontend developer specializing in building responsive, user-focused websites with HTML, CSS, JavaScript, and modern frameworks like React.
                            <br />Clients, collaborators, and hiring managers — feel free to reach out through the form below. I look forward to connecting!</p>
                        
                                <ul>
                                    <li><CiMail size="1.5em" style={{color:'gold'}} /> shaikwazid963@gmail.com</li>
                                    <li><CiMobile3 size="1.5em" style={{color:'gold'}} /> +91 8639634047</li>
                                    <li><CiLocationOn size="1.5em"  style={{color:'gold'}} /> Hyderabad,Telangana 500005</li>
                                </ul>
                   
                    </div>
                        </div>
                        <div className="col-lg-6">
                                        <div className="contact-col">
            
                            <form onSubmit={onSubmit} >
            
                            <div className="mb-3">
                              <label htmlFor="" className='form-label'>Your Name</label>
                            <input type="text" name='name' className='form-control' placeholder='Enter Your Name' required />
                            </div>
                            <div className="mb-3">
                               <label htmlFor="" className='form-label'>Your Phone Number</label>
                            <input type="tel" className='form-control' name='phone_number' placeholder='Enter Phone Number' required />
                           
                            </div>
                      
                      <div className="mb-3">
                              <label htmlFor="" className='form-label'>Write Your Message here</label>
                            <textarea className='form-control' name="message" id="message" rows={6} placeholder='Enter Your Message' required></textarea>
            
                      </div>


                           <div className="text-center mt-4">
                             <button type='submit' className='mb-3 custom_btn2'>Submit  <FaRegArrowAltCircleRight /></button>
            
                           </div>
                            </form>
                            <div className="text-center mt-3 text-success">
                              <small className=''>{result}</small>
                            </div>
            
                            </div>
                        </div>
                    </div>
          </div>
    </div>
  )
}

export default Contact