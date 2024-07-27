import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { Button } from "@mui/material"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>All Courses</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'><Link to='/login'><Button style={{color:"white"}}>Login</Button></Link></div>
            <span>|</span>
            <div className='button'><Link to='/signup'><Button style={{color:"white"}}>Signup</Button></Link></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
