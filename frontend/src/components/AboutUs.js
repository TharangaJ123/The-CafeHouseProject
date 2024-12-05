import React from 'react';
import './AboutUs.css'

export default function AboutUs(){

  function imageChanger(){

  }

  return(
    <div>

        <div className='d-flex'>
          <div className='col-lg-4 bg-body-secondary hero-left d-flex align-items-center flex-column text-center'>
              <h4>KlassyCafe</h4>
              <h6>THE BEST EXPERIENCE</h6>
              <div class="main-white-button scroll-to-section">
                <a href="#reservation">Make A Reservation</a>
              </div>
          </div>

          <div className='col-lg-8 bg-body-black'>
            <div class="slider">
              <div class="slides">
                <div class="slide">
                  <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1"/>
                </div>

                <div class="slide">
                  <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2"/>
                </div>

                <div class="slide">
                  <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3"/>
                </div>
              </div>

              <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
              <button class="next" onclick="changeSlide(1)">&#10095;</button>
            </div>
          </div>
        </div>

    </div>
  );
}