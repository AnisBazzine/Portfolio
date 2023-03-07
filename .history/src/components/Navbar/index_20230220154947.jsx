import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div N="navbar">
            <div class="container">
                <div class="logo">
                    <h2 class="logo-text">Ultra Profile</h2>
                </div>
            
            <ul class="ul-list">
                <li class="list-item"><Link to={'/'} >Home</Link></li>
                <li class="list-item"> Work</li>
                <li class="list-item"> Portfolio</li>
                <li class="list-item"> Resume</li>
                <li class="list-item"> About</li>
                <li class="list-item"><Link to={'/contact'} >Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
