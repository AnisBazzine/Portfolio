// import React, { useState, useEffect } from 'react'
import './style.css'
import porfoliImag1 from '../../images/Portfolio/portfolio-img1.jpg'
import porfoliImag2 from '../../images/Portfolio/portfolio-img2.jpg'
import porfoliImag3 from '../../images/Portfolio/portfolio-img3.jpg'
import porfoliImag4 from '../../images/Portfolio/portfolio-img4.jpg'
import porfoliImag5 from '../../images/Portfolio/portfolio-img5.jpg'
import porfoliImag6 from '../../images/Portfolio/portfolio-img6.jpg'
import porfoliImag7 from '../../images/Portfolio/portfolio-img7.jpg'
import porfoliImag8 from '../../images/Portfolio/portfolio-img8.jpg'
// make in src folder
export default function Portfolio() {
    const images = [
        {id:1, image: porfoliImag1},
        {id:2, image: porfoliImag2},
        {id:3, image: porfoliImag3},
        {id:4, image: porfoliImag4},
        {id:5, image: porfoliImag5},
        {id:6, image: porfoliImag6},
        {id:7, image: porfoliImag7},
        {id:8, image: porfoliImag8},
    ]
    const imagesPortfolio = images.map((imageItem, index) =>{
        return(
            <div key={index}>
                <img src={imageItem} alt={`Images ${index + 1}`}/>
                <p className='overlay'>
                    <span>Show Image</span>
                </p>
            </div>
        )})
    return (
        <div className='portfolio' id='portfolio' >
            <h2 className='portfolio-title'><span>My</span> Portfolio</h2>
            <ul className='portfolio-list'>
                <li className='portfolio-item active'>All</li>
                <li className='portfolio-item' >React js</li>
                <li className='portfolio-item' >React native</li>
            </ul>   
            <div className="box" >
                {imagesPortfolio}
            </div>
        </div>
    )
}