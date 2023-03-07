import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Portfolio() {
    const [images, setImages] = useState([])
    useEffect(()=>{
        axios.get('js/data.json')
        .then(res=>setImages())
    },[])
    const listPortfolios = images.map(portfolio =>{
        return(
            <div key={portfolio.id}>
                <img src={portfolio.image}/>
            </div>
        )})
    return (
        <div className='portfolio' >
            <h2 className='portfolio-title'><span>My</span> Portfolio</h2>
            <ul className='portfolio-list'>
                <li className='portfolio-item active'>All</li>
                <li className='portfolio-item' >React js</li>
                <li className='portfolio-item' >React native</li>
            </ul>   
            <img src='images/Portfolio/portfolio-img1.jpg'  />
        </div>
    )
}