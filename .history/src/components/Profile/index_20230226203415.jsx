import React, { useState } from 'react'

export default function Profile() {
    const [profile , setProfile] = useState(null)
    const [skills, setSkills] = useState(null)
    return (
        <div class="profile_skills">
            <div class="container">
                <div class="profile">
                    <h2 class="profile-title"><span>My </span>Profile</h2>
                    <ul class="profile-list">
                        <li className="profile-item">
                            <span>Name: </span>
                            
                        </li>
                        <li className="profile-item">
                            <span>Birthday: </span>
                            
                        </li>
                        <li className="profile-item">
                            <span>Address: </span>
                            
                        </li>
                        <li className="profile-item">
                            <span>Phone number: </span>
                            
                        </li>
                        <li className="profile-item">
                            <span>Email: </span>
                            
                        </li>
                        <li className="profile-item">
                            <span>Website</span>
                            <span className="web"></span>
                        </li>
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p class="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    <div class="bar">
                        <span class="title">Bootstrap</span>
                        <span class="perc">100%</span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">CSS3</span>
                        <span class="perc">90%</span>
                        <div class="parent">
                            <span class="sp2"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">Photoshop</span>
                        <span class="perc">80%</span>
                        <div class="parent">
                            <span class="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}