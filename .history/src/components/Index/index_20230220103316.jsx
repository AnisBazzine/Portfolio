import React from 'react'
import Home from '../Home'
import Navbar from '../Navbar'
import Work from '../Work'
import Portfolio from '../Portfolio'
import Profile from '../Profile'
import About from '../About'
import SocailMedia from '../'
import Profile from '../Profile'


export default function index() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Work />
            <Portfolio />
            <Profile />
            <About/>
            <SocailMedia />
            <Footer />
        </div>
    )
}
