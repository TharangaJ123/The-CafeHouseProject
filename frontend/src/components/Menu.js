import React from "react";
import './Menu.css'

export default function Menu (){

  return(

    {/* ***** Header Area Start ***** */}
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        {/* ***** Logo Start ***** */}
                        <a href="index.html" className="logo">
                            <img src="assets/images/klassy-logo.png" align="klassy cafe html template"/>
                        </a>
                        {/* ***** Logo End ***** */}
                        {/* ***** Menu Start ***** */}
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                            <li className="scroll-to-section"><a href="#about">About</a></li>
                           	
                        {/*
                            <li className="submenu">
                                <a href="javascript:;">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down Page 1</a></li>
                                    <li><a href="#">Drop Down Page 2</a></li>
                                    <li><a href="#">Drop Down Page 3</a></li>
                                </ul>
                            </li>
                        */}
                            <li className="scroll-to-section"><a href="#menu">Menu</a></li>
                            <li className="scroll-to-section"><a href="#chefs">Chefs</a></li> 
                            <li className="submenu">
                                <a href="javascript:;">Features</a>
                                <ul>
                                    <li><a href="#">Features Page 1</a></li>
                                    <li><a href="#">Features Page 2</a></li>
                                    <li><a href="#">Features Page 3</a></li>
                                    <li><a href="#">Features Page 4</a></li>
                                </ul>
                            </li>
                            {/* <li className=""><a rel="sponsored" href="https://templatemo.com" target="_blank">External URL</a></li> */}
                            <li className="scroll-to-section"><a href="#reservation">Contact Us</a></li> 
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        {/* ***** Menu End ***** */}
                    </nav>
                </div>
            </div>
        </div>
    </header>
    {/* ***** Header Area End ***** */}

    {/* ***** Main Banner Area Start ***** */}
    <div id="top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <div className="left-content">
                        <div className="inner-content">
                            <h4>KlassyCafe</h4>
                            <h6>THE BEST EXPERIENCE</h6>
                            <div className="main-white-button scroll-to-section">
                                <a href="#reservation">Make A Reservation</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="main-banner header-text">
                        <div className="Modern-Slider">
                        {/* // Item */}
                          <div className="item">
                            <div className="img-fill">
                                <img src="assets/images/slide-01.jpg" alt=""/>
                            </div>
                          </div>
                          {/* // Item */}
                          {/* // Item */}
                          <div className="item">
                            <div className="img-fill">
                                <img src="assets/images/slide-02.jpg" alt=""/>
                            </div>
                          </div>
                          {/* // Item */}
                          {/* // Item */}
                          <div className="item">
                            <div className="img-fill">
                                <img src="assets/images/slide-03.jpg" alt=""/>
                            </div>
                          </div>
                          {/* // Item */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* ***** Main Banner Area End ***** */}

    {/* ***** About Area Starts ***** */}
    <section className="section" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="left-text-content">
                        <div className="section-heading">
                            <h6>About Us</h6>
                            <h2>We Leave A Delicious Memory For You</h2>
                        </div>
                        <p>Klassy Cafe is one of the best <a href="https://templatemo.com/tag/restaurant" target="_blank" rel="sponsored">restaurant HTML templates</a> with Bootstrap v4.5.2 CSS framework. You can download and feel free to use this website template layout for your restaurant business. You are allowed to use this template for commercial purposes. <br/><br/>You are NOT allowed to redistribute the template ZIP file on any template donwnload website. Please contact us for more information.</p>
                        <div className="row">
                            <div className="col-4">
                                <img src="assets/images/about-thumb-01.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img src="assets/images/about-thumb-02.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img src="assets/images/about-thumb-03.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="right-content">
                        <div className="thumb">
                            <a rel="nofollow" href="http://youtube.com"><i className="fa fa-play"></i></a>
                            <img src="assets/images/about-video-bg.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ***** About Area Ends ***** */}

    {/* ***** Menu Area Starts ***** */}
    <section className="section" id="menu">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="section-heading">
                        <h6>Our Menu</h6>
                        <h2>Our selection of cakes with quality taste</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu-item-carousel">
            <div className="col-lg-12">
                <div className="owl-menu-item owl-carousel">
                    <div className="item">
                        <div className='card card1'>
                            <div className="price"><h6>$14</h6></div>
                            <div className='info'>
                              <h1 className='title'>Chocolate Cake</h1>
                              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
                              <div className="main-text-button">
                                  <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down"></i></a></div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className='card card2'>
                            <div className="price"><h6>$22</h6></div>
                            <div className='info'>
                              <h1 className='title'>Klassy Pancake</h1>
                              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
                              <div className="main-text-button">
                                  <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down"></i></a></div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className='card card3'>
                            <div className="price"><h6>$18</h6></div>
                            <div className='info'>
                              <h1 className='title'>Tall Klassy Bread</h1>
                              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
                              <div className="main-text-button">
                                  <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down"></i></a></div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className='card card4'>
                            <div className="price"><h6>$10</h6></div>
                            <div className='info'>
                              <h1 className='title'>Blueberry CheeseCake</h1>
                              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
                              <div className="main-text-button">
                                  <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down"></i></a></div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className='card card5'>
                            <div className="price"><h6>$8.50</h6></div>
                            <div className='info'>
                              <h1 className='title'>Klassy Cup Cake</h1>
                              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
                              <div className="main-text-button">
                                  <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down"></i></a></div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className='card card3'>
                            <div className="price"><h6>$7.25</h6></div>
                            <div className='info'>
                              <h1 className='title'>Klassic Cake</h1>
                              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedii do eiusmod teme.</p>
                              <div className="main-text-button">
                                  <div className="scroll-to-section"><a href="#reservation">Make Reservation <i className="fa fa-angle-down"></i></a></div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* ***** Menu Area Ends ***** */}

  )

}