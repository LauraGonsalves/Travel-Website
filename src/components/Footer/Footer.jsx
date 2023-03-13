import React from 'react'
import "./footer.css"
import video2 from "../../Assets/video2.mp4"
import { FiSend } from "react-icons/fi"
import { SlSocialFacebook } from "react-icons/sl"
import { SlSocialInstagram } from "react-icons/sl"
import { SlSocialTwitter } from "react-icons/sl"
import { SlSocialYoutube } from "react-icons/sl"

const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input type="text" placeholder='enter email address' />
            <button className='btn flex ' type="submit">
              SEND<FiSend className="icon" />
            </button>
          </div>


          <div className='card '>
            <div className='details'>
              <span className='name'>Travel</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam
                pharetra
                vitae ipsum odio.</p>
            </div>
            <div className='socialMedia '>
            <a href="url"><SlSocialFacebook className="icon" /></a>
            <a href="url"><SlSocialInstagram className="icon" /></a>
            <a href="url"> <SlSocialTwitter className="icon" /></a>
            <a href="url"><SlSocialYoutube className="icon" /></a>

            </div>
          </div>

        </div>




      </div>

    </section >
  )
}

export default Footer