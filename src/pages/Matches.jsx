import { Link } from "react-router-dom";
function Matches(props){
    
    // function createMarkup(match) {
    //     console.log()
    //     return {__html: match.videos[0].embed};
    //   }

    const allMatches = props.matches.map((match,idx) => {
        return(
        //    <div className="container" key={idx}>
                <div className="card" key={idx}>
                    <div className="competition_title">
                        <h2>Competition - {match.competition}</h2>
                    </div>
                    <div className="match">
                        <div className="match_info">
                            <h5>Match: {match.title}</h5>
                            <h6>Date: {match.date}</h6>
                        </div>
                        <div className="thumbnail">    
                            <img src={match.thumbnail}/>
                        </div>
                    </div>
                    <Link to ={`/match-details/${idx}`} key={idx}><h3>Check out the Highlights for this match</h3></Link>
                </div>
            // </div>
        )
    })
 return (
            <section className='container'>
             {allMatches}
            </section>
    )
}
export default Matches