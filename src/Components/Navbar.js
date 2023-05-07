import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>


      {/* left wale  */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"> {props.title} </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.aboutText}</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href = "/">Disabled</a>
            </li>
          </ul>



          {/* right wale  */}
          {/* <div className={`btn-group text-${props.mode==='light'?'blue':'red'}`} role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" onClick={props.toggleMode} name="btnradio" id="btnradio1" autocomplete="off"/>
              <label className="btn btn-outline-success" htmlFor="btnradio1">Green mode</label>

              <input type="radio" className="btn-check" onClick={props.toggleMode} name="btnradio" id="btnradio2" autocomplete="off"/>
              <label className="btn btn-outline-primary" htmlFor="btnradio2">Blue mode</label>

              <input type="radio" className="btn-check" onClick={props.toggleMode} name="btnradio" id="btnradio3" autocomplete="off"/>
              <label className="btn btn-outline-danger" htmlFor="btnradio3">Red mode</label>

              <input type="radio" className="btn-check" onClick={props.toggleMode} name="btnradio" id="btnradio4" autocomplete="off"/>
              <label className="btn btn-outline-dark" htmlFor="btnradio4">Dark mode</label>

              <input type="radio" className="btn-check" onClick={props.toggleMode} name="btnradio" id="btnradio5" autocomplete="off"/>
              <label className="btn btn-outline-secondary" htmlFor="btnradio5">Light mode</label>

               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
          </div> */}

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
               {/* eslint-disable-next-line */}
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
               <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlhtmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired ,
  aboutText: PropTypes.string 
};

Navbar.defaultProps = {
  title: 'Akshay', 
  aboutText: 'Jain'
}