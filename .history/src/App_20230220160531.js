import React from 'react'
import { BrowserRouter , Route, Routes} from  'react-router-dom'
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import Index from './components/Index';
import Footer from './components/Footer';


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route exact path='/work' element={<Work/>}/>
                <Route exact path='/portfolio' element={<Portfolio/>}/>
                <Route exact path='/profile' element={<Profile/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/socailMedia' element={<SocailMedia/>}/>
                <Route exact path='/contact' element={<Contact/>}/>

            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
export default App;
/*
                    <li className="list-item"><Link to={'/socailMedia'}>Socail Media</Link></li>
                    <li className="list-item"><Link to={'/contact'} >Contact</Link></li>

*/