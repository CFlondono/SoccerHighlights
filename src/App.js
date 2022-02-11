import Navbar from './components/Navbar';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Highlights from './pages/Highlights';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useEffect } from 'react';


function App() {
  



  return (
    <div className="App">
      <h3>Hello World</h3>
       <Navbar />
       <Routes>
         <Route path="/" element = {<Home />}/>
         <Route path="/matches" element = {<Matches />}/>
         <Route path="/highlights" element = {<Highlights />}/>
       </Routes>
    </div>
  )
}

export default App;
