import { useEffect, useState } from 'react';

function Matches(){
    const [ matches, setMatches] = useState([])
    let URL = 'https://www.scorebat.com/video-api/v3/'
    let matchesObj = {}

  useEffect(
    () =>{
      fetch(URL)
      .then(res => res.json())
      .then((json) =>{
          setMatches(json)
        //   console.log(matches)
      }).catch(error =>{
          console.log(error)
      })
    }, []);
    return (
        <section className='container'>
            {/* {matches.map((match =>{
                return (
                    <div className="card">
                        <
                    </div>
                )
            }))} */}

           <p>This is the page to show the soccer matches</p>
        </section>
    )
}
export default Matches