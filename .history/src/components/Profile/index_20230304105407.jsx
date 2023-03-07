import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Profile() {
    const [profile , setProfile] = useState([])
    const [skills, setSkills] = useState([])
    useEffect(()=>{
        axios.get('js/data.json')
        .then(res => {
            setProfile(res.data.profile)
            setSkills(res.data.skills)
        })
        .catch(err=>console.log(err))
    },[])
    const keysProfile = profile.length > 0 ? Object.keys(profile[0]) : [];
    const keysSkills = profile.length > 0 ? Object.keys(skills[0]) : [];
    console.log(keysProfile[1]);
    console.log(keysSkills[1]);
    // const test = 
    const profileShow = profile.map( profileItem =>{
        return(
        <ul className="profile-list" key={profileItem.id}>
            <li className="profile-item">
            <span>Name : </span>
                {profileItem.name}        
            </li>
            <li className="profile-item">
            <span>Birthday : </span>
                {profileItem.birthday}        
            </li>
            <li className="profile-item">
            <span>Adress : </span>
                {profileItem.adress}        
            </li>
            <li className="profile-item">
            <span>Phone number : </span>
                {profileItem.phone}        
            </li>
            <li className="profile-item">
            <span>Email : </span>
                {profileItem.email}        
            </li>
            <li className="profile-item">
            <span>Web Site : </span>
                {profileItem.website}        
            </li>
        </ul>
        )})
    const skillsShow = skills.map( skillItem =>{
        // return(

        // )
    })
    return (
        <div className="profile_skills">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    {profileShow}
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    <div className="bar">
                        <span className="title">Bootstrap</span>
                        <span className="perc">100%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">CSS3</span>
                        <span className="perc">90%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">Photoshop</span>
                        <span className="perc">80%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}