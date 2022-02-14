import Navbar from './components/Navbar';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Match from './components/Match';
import Highlights from './pages/Highlights';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useEffect, useState } from 'react';



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
    // let count = 0;
    // let sameCompetition = false;
    for(let i = 0; i < matches.length; i++){
    // if the matches[] is unique, then add it to the competitions array  
      // for (let j=0; j < arrayCompetitions.length; j++){
      //   if (matches[i] === arrayCompetitions[j]) {
      //     sameCompetition = true;
      //   }
      // }
      // if (arrayCompetitions.includes(arrayCompetitions[i]) == false) {
      //   count++;
      //   if (count == 1 && sameCompetition == false){
          arrayCompetitions.push(matches[i].competition)
      //   }
      //   count = 0
      }
        const uniqueCompetition = [...new Set(arrayCompetitions)];
        console.log(uniqueCompetition)
    //add the array into the state variable competition  
    // setCompetitions(arrayCompetitions)
  }

  createCompetitions()

  return (
    <div className="App">
      <h3>Soccer Matches Around World</h3>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches matches={matches}/>} />
        <Route path="/highlights" element={<Highlights matches={matches}/>} />
        <Route path="/match-details" element={ <Match /> }/>
      </Routes>
    </div>
  )
}

export default App;
