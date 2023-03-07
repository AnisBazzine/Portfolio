import React ,{useState, useEffect} from 'react'
import axios from 'axios'
export default function Work() {
    const [work, setWork] = useState(null)
    useEffect (()=>{
        axios.get('js/data.json')
        .then(res =>setWork(res.data.works))
        .catch(err => console.log(err))
    },[work])
    // console.log(work)
    
    return (
        <div className='work' >
            <div className='container'>
                <h2 className='work-title'><span>My</span> Work</h2>
                <div className='part-first'>
                    <i className="icon fa fa-chain fa-2x"></i>
                    <h4 className="part-title">Mobile Ux</h4>
                    <hr className="line"/>
                    <p className="part-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </p>
                </div>
                <div className="part">
                    <i className="icon fa fa-bolt fa-2x"></i>
                    <h4 className="part-title">Mobile Ux</h4>
                    <hr className="line"/>
                    <p className="part-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </p>
                </div>
                <div className="part last">
                    <i className="icon fa fa-tachometer fa-2x"></i>
                    <h4 className="part-title">Mobile Ux</h4>
                    <hr className="line"/>
                    <p className="part-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </p>
                </div>
            </div>
        </div>
    )
}
