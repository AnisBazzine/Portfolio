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
                <li class="list-item"><Link to href="#">Home</Link></li>
                <li class="list-item"><Link to href="#">Work</Link></li>
                <li class="list-item"><Link to href="#">Portfolio</Link></li>
                <li class="list-item"><Link to href="#">Resume</Link></li>
                <li class="list-item"><Link to href="#">About</Link></li>
                <li class="list-item"><Link to href="#">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
