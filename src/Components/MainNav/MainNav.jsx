import React from 'react'
import './MainNav.css'
import { NavLink } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";

const MainNav = () => {
  return (
    <div>
      {/* bg-warning bg-opacity-10 border-bottom border-warning */}
      <nav className="navbar navbar-expand-lg   ">
  <div className="container-fluid">
    <a className="navbar-brand d-flex gap-2 align-items-center" href="/">
    <span><FaRegUser size='1.2em' style={{color:'gold'}} /></span> 
    <div className="">
      
      WS <p className='mb-0 under_line'></p>
    </div>
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/"  className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          } aria-current="page" >Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about"  className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }>About</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to='/skills' className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }>Skills</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink to='/projects' className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }>Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contact' className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }>Contact</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
   
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default MainNav