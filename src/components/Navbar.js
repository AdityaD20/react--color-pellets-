import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode } bg-${props.mode }`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/"> {props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

 

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
        
         </ul>
     
  <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" > Enable Dark Mode</label>
</div>

<div className={`form-check form-switch text-${props.mode === 'light'?'blue':'light'}`}>
  <input className="form-check-input" onClick={props.toggle11Mode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" > Enable blue Mode</label>
</div>

<div className={`form-check form-switch text-${props.mode === 'light'?'pink':'light'}`}>
  <input className="form-check-input" onClick={props.toggle22Mode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" > Enable pink Mode</label>
</div>

<div className={`form-check form-switch text-${props.mode === 'light'?'yellow':'light'}`}>
  <input className="form-check-input" onClick={props.toggle33Mode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" > Enable yellow Mode</label>
</div> 

      </div>
    </div>
  </nav>
  )
}
 
Navbar.propTypes = { 
    title : PropTypes.string.isRequired, 
 aboutText : PropTypes.string.isRequired
 }

 Navbar.defaultProps = {
  title : 'Set Tital Here',
  aboutText : 'About Text Here'
 };
 