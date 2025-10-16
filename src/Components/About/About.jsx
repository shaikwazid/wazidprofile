import React from 'react'
import './About.css'
import Titiles from '../Titiles/Titiles';
import '../../App.css';
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import profile from '../../assets/profile/wazid.jpg'
import { useNavigate } from 'react-router-dom';
import { IoPlayBackOutline } from "react-icons/io5";




const About = () => {
  const navigate = useNavigate();
    const goToAbout = () => {
    navigate("/"); // 👈 navigate to the About page
  };

  const navigate2 = useNavigate();
    const gotoContact = () => {
    navigate2("/contact"); // 👈 navigate to the Contact page
  };
  return (
    <div className='container about'>
       <div className="text-end d-lg-none d-block">
                  <small onClick={goToAbout}> <span><IoPlayBackOutline /></span> Back</small>
                </div>
      <div className="pb-2">
                       <Titiles maintitle="About" />
          </div>


          <div className="">
            <div className="">
            
            
                              
                              
                                
            
            
                                <div className="my-3">
                                      <h5 className='title_one'>Professional Experience :</h5>
            
                                      <p>Entrolabs IT Solutions - Front-end Developer.
                                    Proficient in UI development using HTML5, CSS3, JavaScript, and Bootstrap, React : with 2 years of experience. Skilled in building dynamic and responsive web applications using ReactJS and modern front-end technologies. Adept at creating visually appealing, user-friendly interfaces that align with contemporary design standards and enhance user experience.
                                           </p>
                                    
                                                 </div>
                                <div className="mb-4">
                                      <h5 className='title_one'>Education :</h5>
            
                                      <p><span><FaGraduationCap size="1.5em" /></span> ~ MCA from University Post Graduate College secunderabad - 2022</p>
                                      <p><span><FaGraduationCap size="1.5em" /></span> ~ BSC Computer Science from University Post Graduate College secunderabad - 2019
                                          </p>
                                    
                                 </div>

                                 <div className="row pt-4 justify-content-center">
                                  <div className="col-lg-5">
                                    <div className="row  align-items-center">
                                      <div className="col-lg-6">
                                          <div className="text-center">
                                                                <img src={profile} className='profile' alt="profile-phto" />
                                                            </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className=" text-center my-3">
                                          <h6>Shaik Wazid</h6>
                                          <h6 className='title_one'>Front - End Developer</h6>
                                        </div>
                                        <div className="d-flex gap-3 justify-content-center mb-lg-0 mb-4 justify-content-lg-end">
                                                            <div className="">
                                                                <a className='custom_btn2' onClick={gotoContact}  ><CiMail size="1.5em"  /></a>
                                                            </div>
                                                            <div className="">
                                                                <a className='custom_btn2' href='https://github.com/shaikwazid' target="_blank"
                                          rel="noopener noreferrer"><FaGithub  size="1.5em"  /></a>
                                                            </div>
                                                            <div className="">
                                                                <a className='custom_btn2'  href='https://www.linkedin.com/in/shaikwazid4047/' target="_blank"
                                          rel="noopener noreferrer"><CiLinkedin   size="1.5em"  /></a>
                                                            </div>
                                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                 </div>
            
                            </div>
          </div>
    </div>
  )
}

export default About