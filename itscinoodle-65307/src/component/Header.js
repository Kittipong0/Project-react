import React from 'react';
import { Link } from "react-router-dom";
import logo from '../image/itsci.png';
import './style.css';

function Header() {
    return (
        <div className='heads'>
        <nav class="navbar navbar-expand-lg bg-light shadow" data-bs-theme="light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/"><img src = {logo}  class = "logo" alt=''/></Link>
                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <Link class="nav-link home" to="/" id='home'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link noodle" to="/noodle" id='noodle'>Noodle</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link about" to="/about" id='about'>About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
      </div>
    )
}

export default Header;