import React , {useState,useEffect} from 'react'
import axios from 'axios'

export default function SocailMedia() {
    const [social, setSocial] = useState([])
    useEffect(()=>{
        axios.get('js/data.json')
        .then(res => {setSocial(res.data.social)})
        .catch(err =>{console.log(err)})
    },[])

    return (
        <div class="social-media">
            
            <div class="social face">
                <i class="icon fa fa-facebook fa-lg"></i>
                <p>
                    <span class="info1">Follow Me on</span>
                    <span class="info2">Social Facebook</span>
                </p>
            </div>
            
            <div class="social twitter">
                <i class="icon fa fa-twitter fa-lg"></i>
                <p>
                    <span class="info1">Tweet Me on</span>
                    <span class="info2">Social twitter</span>
                </p>
            </div>
            
            <div class="social pin">
                <i class="icon fa fa-pinterest fa-lg"></i>
                <p>
                    <span class="info1">Pin Me on</span>
                    <span class="info2">Social Pinterest</span>
                </p>
            </div><!-- ./social pin -->
        </div>
        
    )
}
