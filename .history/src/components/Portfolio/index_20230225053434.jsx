import React, { useState } from 'react'

export default function Portfolio() {
    const [portfolio, setPortfolio] = useState([])
    const listPortfolio = portfolio.map(port =>{
        return(
            
        )
        
    })
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