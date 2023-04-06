import React from 'react'
import "./Footer.css"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <>
    <footer className='footermain'>
        <div className='footerc'>
            <div>
                <ul className='footlink'>
                    <li>HOME</li>
                    <li>BLOGS</li>
                </ul>
            </div>
            <div>
                <ul className='footlink'>
                    <li>TRIP</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            <div className='threediv'>
                <div>
                <span><GoogleIcon /></span>
                </div>
                <div>
                <span><FacebookIcon /></span>
                </div>
                <div>
                <span><TwitterIcon /></span>
                </div>
                
            </div>
        </div>
    </footer>
    
    </>
  )
}
