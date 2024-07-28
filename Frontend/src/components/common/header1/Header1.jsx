import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Head from "./Head1";
import { Button } from "@mui/material";
import "./header.css";

const Header1 = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const getLinkStyle = (paths) => {
    const pathArray = Array.isArray(paths) ? paths : paths.split(',');
    return pathArray.includes(location.pathname) ? { color: '#00a6bb', fontWeight: 'bold' } : {};
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to='/project' style={getLinkStyle('/project')}>Home</Link>
            </li>
            <li>
              <Link to='/reference' style={getLinkStyle('/reference')}>Reference</Link>
            </li>
            <li>
              <Link to='/wsubmit' style={getLinkStyle(['/wsubmit', '/wsubmitlink1', '/wsubmitlink2', '/wsubmitlink3', '/wsubmitlink4', '/wsubmitlink5', '/wsubmitlink6', '/wsubmitform1','/wsubmitform2','/wsubmitform3','/wsubmitform4','/wsubmitform5','/wsubmitform6','/wsubmitform7','/wsubmitform8'])}>Submission</Link>
            </li>
            <li>
              <Link to='/discussion' style={getLinkStyle('/discussion')}>Discussion</Link>
            </li>
          </ul>
          <div className='start'>
          <div className='button' ><Link to='/' ><Button style={{color:"white"}}>Logout</Button></Link></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header1;
