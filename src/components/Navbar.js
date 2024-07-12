import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">{props.l1} </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.l2}</Link>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
        <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1" />
          <label className="custom-control-label" htmlFor="customSwitch1">Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypesropTypes = {
  title: PropTypes.string,
  l1: PropTypes.string,
  l2: PropTypes.string
}

Navbar.defaultProps = {
  title: 'TextUtils',
  l1: 'Home',
  l2: 'About'
}