import { Link } from "react-router-dom";
function Competitions(props){

    const parseMatches = (matches) => {
        const competitionsObject = {};
    
        matches.forEach((match) => {
          if (competitionsObject[match.competition]) {
            //check if your dictionary contains a field that matches the current match's competition
            competitionsObject[match.competition].push(match);
            // if there is a match, add it to the existing array
          } else {
            competitionsObject[match.competition] = [match];
            // create a new entry in the dctionary with an array containing the current match
          }
        });
        const arrayOfEntries = Object.entries(competitionsObject);
        console.log('This is the array of competitions',arrayOfEntries)
        return arrayOfEntries
    };
    const competitionsArray = parseMatches(props.matches)
    const allCompetitions = competitionsArray.map((competition,idx) => {
        return(
            <div className="container" key={idx}>
                <div className="card" key ={idx}>
                    <div className="competition_title">
                        <h2>Competition - {competition[0]}</h2>
                    </div>
                    <Link to ={`/matches-competitions/${idx}`} key={idx}></Link>
                </div>
            </div>

        )
    })

    return (
        <section className='container'>
           {allCompetitions}
       </section>
)
}
export default Competitions