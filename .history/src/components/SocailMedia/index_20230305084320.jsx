import React , {useState,useEffect} from 'react'
import axios from 'axios'

export default function SocailMedia() {
    const [social, setSocial] = useState([])
    useEffect(()=>{
        axios.get('js/data.json')
        .then(res => {setSocial(res.data.soc)})
    },[])
    return (
        <div>SocailMedia</div>
    )
}
