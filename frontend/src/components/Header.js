import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

export default function Header(){
  return(
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex align-items-center text-center">
        

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <a class="navbar-brand mx-auto p-lg-2" href="#">The Cafe House</a>

            <li class="nav-item active p-lg-1">
              <a class="nav-link " href="#">Home</a>
            </li>
            <li class="nav-item p-lg-1">
              <a class="nav-link" href="#">Menu</a>
            </li>
            <li class="nav-item p-lg-1">
              <Link to="/Reservations" className='nav-link'>Reservations</Link>
            </li>
            <li class="nav-item p-lg-1">
              <a class="nav-link" href="#">Contact</a>
            </li>
       

          </ul>
        </div>
      </nav>

    </div>
  );
}