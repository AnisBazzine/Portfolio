import React from 'react'
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import Index from './components/Index';


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Index/>
            <Contact/>
        </div>
    );
}
export default App;