import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import './cards.css'
import AOS from "aos";
import "aos/dist/aos.css";


function Card({title,imagesource,Text,smalling}) {
 

    AOS.init();
    AOS.refresh();


  return (
    <div className='card text-center bg-dark' data-aos="zoom-in"  data-aos-easing='ease-out-cubic'>
        
        <div className="overflow " >
        <img src={imagesource} className='card-img-top'></img>
        </div>
      <div className='card-body text-light'>
          <h4  className='card-title' data-aos="fade-down-left">{title}</h4>
          <p className='card-text text-light'>{Text}</p>
          <a href="#!" className='btn btn-outline-secondary rounded-0'>
            Go to this website
          </a>
          <br />
          <span className="tex-light">{smalling}</span>
      </div>
    </div>
  )
}

Card.prototype={

  title:propTypes.string.isRequired,
  imagesource:propTypes.string
}

export default Card
