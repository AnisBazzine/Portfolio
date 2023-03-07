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
                <li class="list-item"><Link href="#">Home</Link></li>
                <li class="list-item"><Link href="#">Work</Link></li>
                <li class="list-item"><Link href="#">Portfolio</Link></li>
                <li class="list-item"><Link href="#">Resume</Link></li>
                <li class="list-item"><Link href="#">About</Link></li>
                <li class="list-item"><Link href="#">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
