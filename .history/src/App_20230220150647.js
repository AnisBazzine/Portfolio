import React from 'react'
import { BrowserRouter , Route} from  'react-router-dom'
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import Index from './components/Index';


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            
            <Index/>
            <Contact/>
        </BrowserRouter>
    );
}
export default App;