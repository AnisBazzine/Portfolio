import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Portfolio() {
    const [images, setImages] = useState([])
    useEffect(()=>{
        axios.get('js/data.json')
        .then(res=>setImages(res.data.portfolio))
        
        .catch(err =>console.log(err))
    },[])
    console.log(images);
    const imagePortfolios = images.map(portfolio =>{
        console.log(portf);
        return(
            <div key={portfolio.id}>
                <img src={portfolio.image} alt=''/>
                <p className='overlay'>
                    <span>Show Image</span>
                </p>
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
            {imagePortfolios}
        </div>
    )
}