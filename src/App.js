import Navbar from './components/Navbar';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Match from './pages/Match';
import Highlights from './pages/Highlights';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useEffect, useState } from 'react';
import Competitions from './pages/Competitions';

function App() {  

  const [matches, setMatches] = useState([])
  const [competitions, setCompetitions] = useState([])
  // let competitions = []
  let URL = 'https://www.scorebat.com/video-api/v3/'

  useEffect(
    () => {
      fetch(URL)
        .then(res => res.json())
        .then((json) => {
          setMatches(json.response)
          console.log(json.response)
          // .catch (error => {
          //   console.log(error)
          // })
        })
    }, 
  []);
  const createCompetitions = () => {
    let arrayCompetitions = [];
    for(let i = 0; i < matches.length; i++){
          arrayCompetitions.push(matches[i].competition)
      }
        const uniqueCompetition = [...new Set(arrayCompetitions)];
        console.log(uniqueCompetition)
    setCompetitions(arrayCompetitions)
  }
  useEffect(
    () =>{
      createCompetitions() 
    }, 
  [matches]
  );
  return (
    <div className="App">
      {/* <img src= "/images/golazo.png" alt="logo"/> */}
      <h3>Soccer Matches Around World</h3>
      <Navbar />
      <Competitions/>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches matches={matches}/>} />
        <Route path="/highlights" element={<Highlights matches={matches}/>} />
        <Route path="/match-details/:index" element={ <Match matches={matches}/> }/>
        {/* <Route path="/competitions/" element={ <Competitions matches={competitions}/> }/> */}
      </Routes>
    </div>
  )
}

export default App;
