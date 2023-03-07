import React , {useState,useEffect} from 'react'
import axios from 'axios'

export default function SocailMedia() {
    const [social, setSocial] = useState([])
    useEffect(()=>{
        axios.get('js/data.json')
        .then(res => {setSocial(res.data.social)})
        .catch(err =>{console.log(err)})
    },[])
    const socialList = social.map(socialItem=>{
        return(
            <div className="social face" key={socialItem.id}>
                <i className={"icon fa fa-facebook fa-lg"}></i>
                <p>
                    <span className="info1">Follow Me on</span>
                    <span className="info2">Social Facebook</span>
                </p>
            </div>
        )
    })
    return (
        <div className="social-media">


            <div className="social twitter">
                <i className="icon fa fa-twitter fa-lg"></i>
                <p>
                    <span className="info1">Tweet Me on</span>
                    <span className="info2">Social twitter</span>
                </p>
            </div>
            
            <div className="social pin">
                <i className="icon fa fa-pinterest fa-lg"></i>
                <p>
                    <span className="info1">Pin Me on</span>
                    <span className="info2">Social Pinterest</span>
                </p>
            </div>
        </div>
        
    )
}
