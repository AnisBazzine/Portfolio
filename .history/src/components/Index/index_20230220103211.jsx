import React from 'react'
import Home from '../Home'
import Navbar from '../Navbar'
import Work from '../Work'
import Work from '../Portfolio'

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
