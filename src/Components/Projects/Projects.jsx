import React from 'react';
import '../../App.css';
import './Projects.css';
import { FaGithub } from "react-icons/fa";
import Titiles from '../Titiles/Titiles';
import { useNavigate } from 'react-router-dom';
import { IoPlayBackOutline } from "react-icons/io5";

const Projects = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/"); // 👈 navigate to the About page
  };
  return (
    <div>
        <div className="container projects">
          <div className="text-end d-lg-none d-block">
            <small onClick={goToAbout}> <span><IoPlayBackOutline /></span> Back</small>
          </div>
          <div className="pb-2">
                       <Titiles maintitle="Projects" />
          </div>

          <div className="row mt-4">
            <div className="col-lg-3 mb-2">
              <div className="card cc_card1">
                <div className="card-body">
                  <h5 className="card-title c_title_1">Employee Dashboard for Organizations</h5>
                  <p className="card-text"> Built a fully responsive and dynamic dashboard for managing employee data, suitable for any organization</p>
                 <p>Developed responsive UI components using Bootstrap to display employee login/logout times,
                    attendance records, and other key details, ensuring a clean design with cross-browser and
                    mobile compatibility.</p>
                  
                </div>
                <div className="card-footer">
                  <a href="https://shaikwazid.github.io/ElfrsDashboard/" className="btn btn-github ">
                     
                        <FaGithub  size="1.5em"/>
                        <span>View on Github</span>
                      
                      </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card cc_card2">
                <div className="card-body">
                    <h5 className="card-title c_title_2">Andhra Pradesh Waqf Board – Website & Dashboard</h5>
                 <p>Developed a responsive website and dashboard using HTML, CSS, Bootstrap, jQuery, and JavaScript.
                  Implemented an intuitive UI with Bootstrap, enhanced interactivity with jQuery, and ensured mobile
                  responsiveness, accessibility, and optimized performance for seamless navigation and data
                  presentation.</p>
               
                  
                </div>
                <div className="card-footer">
                     <a href="https://shaikwazid.github.io/Waqf_Board/" className="btn btn-github"><FaGithub  size="1.5em"/>
                        <span>View on Github</span></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card cc_card3">
                <div className="card-body">
                    <h5 className="card-title c_title_3">HAJ Committee Website & Dashboard – AP</h5>
          
                 <p>Designed a clean and accessible frontend interface for both public-facing pages and the admin
 dashboard of the Andhra Pradesh Haj Committee website. Implemented responsive UI components
 using HTML, CSS, and Bootstrap to ensure a consistent, mobile-friendly experience across all devices.</p>
                 
                  
                </div>
                <div className="card-footer">
                   <a href="https://shaikwazid.github.io/haj_committee/" target='blank' className="btn btn-github"><FaGithub  size="1.5em"/>
                        <span>View on Github</span></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card cc_card4">
                <div className="card-body">
                    <h5 className="card-title c_title_4">Mission for Elimination of Poverty in Municipal Areas (MEPMA) – AP</h5>
              
                 <p>Designed a clean and accessible frontend interface for both public-facing pages and the admin
 dashboard of the Andhra Pradesh Haj Committee website. Implemented responsive UI components
 using HTML, CSS, and Bootstrap to ensure a consistent, mobile-friendly experience across all devices.</p>
                  
                  
                </div>
                <div className="card-footer">
                  <a href="https://shaikwazid.github.io/MepmaWebsite/" target='blank' className="btn btn-github"><FaGithub  size="1.5em"/>
                        <span>View on Github</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects