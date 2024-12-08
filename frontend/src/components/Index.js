import React,{useState} from 'react';
import './Index.css';
import { images } from './Home-carousel-images';

export default function AboutUs(){

  const [activeImg,setActiveImg] = useState(0);

  const handlePrev = ()=>{
     if(activeImg==0){
      setActiveImg(images.length-1)
     }else{
      setActiveImg((activeImg-1)%images.length);
     }
  }

  const handleNext = ()=>{
    setActiveImg((activeImg+1)%images.length);
  }

  return(
    <div>

        <div className='d-flex'>

          <div className='col-lg-4 bg-body-secondary hero-left d-flex align-items-center flex-column text-center justify-content-center'>
              <h4>The Cafe House</h4>
              <h6>THE BEST EXPERIENCE</h6>
              <div className="main-white-button scroll-to-section">
                <a href="#reservation">Make A Reservation</a>
              </div>
          </div>

          <div className='slider col-lg-8'>
            <button className='controllers prev' onClick={handlePrev}>prev</button>
            {
              images.map((item,index)=>{
                return(
                  <img className={activeImg === index ? "block slide-img":"hide"} src={item.src} alt={item.alt} key={item.id}/>
                )
              })
            }
            <button className='controllers next' onClick={handleNext}>next</button>
          </div>

        </div>

        <div className='section-braker'></div>

        <div className='about-us-section container'>
            <div className='col-lg-6 d-flex flex-column justify-content-around align-items-start'>
              <h3 className='about-us-header'>
                --About Us
              </h3>
              <p className='d-flex flex-column justify-content-around align-items-start text-start about-para'>
              Welcome to The Café House Food Shop!<br/><br/>

              We are a cozy spot offering delicious food, refreshing<br/>drinks, and freshly brewed coffee. Our menu is crafted with<br/> care, featuring something for everyone to enjoy.<br/><br/>

              At The Café House, we focus on good food, a warm atmosphere,<br/> and friendly service. Whether you’re here for a quick <br/>bite or to relax with friends, we’re happy to have you.<br/>

              Stop by and make yourself at home!
              </p>

              <div class="row">
                <div class="col-4">
                  <img src="assets/images/about-thumb-01.jpg" alt=""/>
                </div>
                <div class="col-4">
                  <img src="assets/images/about-thumb-02.jpg" alt=""/>
                </div>
                <div class="col-4">
                  <img src="assets/images/about-thumb-03.jpg" alt=""/>
                </div>
              </div>

            </div>

            <div className='col-lg-6 d-flex flex-column justify-content-around align-items-end '>
              
            </div>

        </div>

    </div>
  );
}