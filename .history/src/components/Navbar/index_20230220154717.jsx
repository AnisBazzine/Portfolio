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
                <li class="list-item"><Link to={'/'} >Home</Link></li>
                <li class="list-item"><Link to={''} >Work</Link></li>
                <li class="list-item"><Link to={''} >Portfolio</Link></li>
                <li class="list-item"><Link to={''} >Resume</Link></li>
                <li class="list-item"><Link to={''} >About</Link></li>
                <li class="list-item"><Link to={'/contact'} >Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
