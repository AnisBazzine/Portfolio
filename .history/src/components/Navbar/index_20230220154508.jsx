import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <h2 class="logo-text">Ultra Profile</h2>
                </div>
            
            <ul class="ul-list">
                <li class="list-item"><a href="#">Home</a></li>
                <li class="list-item"><a href="#">Work</a></li>
                <li class="list-item"><a href="#">Portfolio</a></li>
                <li class="list-item"><a href="#">Resume</a></li>
                <li class="list-item"><a href="#">About</a></li>
                <li class="list-item"><a href="#">Contact</a></li>
                </ul><!-- ./ul-list -->
            </div><!-- ./container -->
        </div><!-- ./navbar -->
    )
}
