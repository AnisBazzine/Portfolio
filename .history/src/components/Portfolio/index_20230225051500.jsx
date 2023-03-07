import React from 'react'

export default function Portfolio() {
    return (
        <div className='portfolio' >
            <h2 className='portfolio-title'><span>My</span> Portfolio</h2>
            <ul className='portfolio-list'>
                <li className='portfolio-item active'>All</li>
                <li className='portfolio-item' >React js</li>
                <li className='portfolio-item' >React native</li>
                <li className='portfolio-item' ></li>
                <li className='portfolio-item' ></li>
            </ul>    
        </div>
    )
}