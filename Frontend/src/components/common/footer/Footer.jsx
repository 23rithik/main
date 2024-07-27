import React from 'react'
import './footer.css'
import logo from '../../../assets/logo new.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'


const Footer = () => {
  return (
   <footer >
    <div className="container">
        <div className="row pb-3 pt-3 ">
            <div className="col-lg-3">
               <div className="footer-about footer-box">
               <img src={logo} alt="" />
                <p>Our organization had a humble beginning providing skill training programs to selected academic institutions</p>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-instagram"></i> 
               </div>
            </div>
            <div className="col-lg-3">
               <div className="footer-links footer-box">
               <h2>Quick Links</h2>
                <ul>
                    <li><i class="fa-solid fa-angles-right"></i><Link to='/' style={{color:"black"}}>Home</Link></li>
                    <li><i class="fa-solid fa-angles-right"></i><Link to='/reference' style={{color:"black"}}>Reference</Link></li>
                    <li><i class="fa-solid fa-angles-right"></i><Link to='/wsubmit' style={{color:"black"}}>Submission</Link></li>
                    <li><i class="fa-solid fa-angles-right"></i><Link to='/discussion' style={{color:"black"}}>Discussion</Link></li>
                </ul>
               </div>
            </div>
            <div className="col-lg-3">
               <div className="footer-course footer-box">
               <h2>Courses</h2>
                <ul>
                    <li><i class="fa-solid fa-angles-right"></i>Digital Marketing</li>
                    <li><i class="fa-solid fa-angles-right"></i>Full Stack Development (MERN)</li>
                    <li><i class="fa-solid fa-angles-right"></i>Full Stack Development (MEAN)</li>
                    <li><i class="fa-solid fa-angles-right"></i>Cyber Security</li>
                    <li><i class="fa-solid fa-angles-right"></i>Software Testing</li>
                </ul>
               </div>
            </div>
            <div className="col-lg-3">
                <div className="footer-contact footer-box">
                <h2> Contact Us</h2>
                <ul>
                    <li>G1, Ground Floor, Thejaswini, Technopark Campus
                    Thiruvananthapuram, Kerala, India - 695 581</li>
                    <li><i class="fa-solid fa-phone-volume"></i>+91 75 940 51437</li>
                    <li><i class="fa-solid fa-envelope"></i>info@ictkerala.org</li>
                </ul>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="footer-bottom">
                <p className="copyright">

                Copyright © 2024 by Ict Academy Of Kerala
                </p>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer
