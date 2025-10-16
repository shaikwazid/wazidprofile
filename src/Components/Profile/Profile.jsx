import React from 'react'
import './Profile.css';
import '../../App.css'
import profile from '../../assets/profile/wazid.jpg'
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

const navigate = useNavigate();
  const gotoContact = () => {
  navigate("/contact"); // 👈 navigate to the Contact page
};

  return (
    <div className='container'>
        <div className="pt-lg-5 pt-0">

           <div className="">
              <div className="">

                    <div className="d-flex gap-2 d-lg-none d-block justify-content-center align-items-center mb-5">
                      <div className="">
                        <NavLink className='custom_btn2 text-decoration-none' to='/about'>About</NavLink>
                      </div>
                      <div className="">
                        <NavLink className='custom_btn2 text-decoration-none' to='/projects'>Projects</NavLink>
                      </div>
                      <div className="">
                        <NavLink className='custom_btn2 text-decoration-none' to='/contact'>Contact</NavLink>
                      </div>
                    </div>

                 

                  </div>
             <div className="row align-items-center">
                <div className="col-lg-4">

                

                    <div className="text-center">
                        <img src={profile} className='profile' alt="profile-phto" />
                    </div>

                    <div className=" text-center my-3">
                      <h6>Shaik Wazid</h6>
                       <h6 className='title_one'>Front - End Developer</h6>
                    </div>

                    

                </div>
                <div className="col-lg-8">


                  <div className="d-flex gap-3 justify-content-center mb-lg-0 mb-4 justify-content-lg-end">
                    <div className="">
                        <a className='custom_btn2' onClick={gotoContact} ><CiMail size="1.5em"  /></a>
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
                    <div className=" mb-4">
                        <h5 className='title_one'>PROFILE :</h5>


                     <div className="">
                        <p>Creative and detail-oriented Frontend Developer with experience in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, React.js, jQuery, and Bootstrap. Skilled in translating designs into clean, scalable code and delivering seamless cross-device performance. Passionate about UI/UX, modern web trends, and crafting efficient, engaging digital experiences.</p>
                     </div>
                    </div>
                    


                    <div className="mb-4">
                          <h5 className='title_one'>Professional Experience :</h5>

                          <p>Entrolabs IT Solutions - Front-end Developer.
                        Proficient in UI development using HTML5, CSS3, JavaScript, and Bootstrap, React : with 2 years of experience. Skilled in building dynamic and responsive web applications using ReactJS and modern front-end technologies. Adept at creating visually appealing, user-friendly interfaces that align with contemporary design standards and enhance user experience.
                               </p>
                        
                                     </div>

                </div>
            </div>
           </div>

        </div>
    </div>
  )
}

export default Profile