import { Link } from "react-router-dom"
function Home(){
    return (
        <div className="container">
            <div className="card">
            <h1>The most recent best goals from around world</h1>
                <div className="match">
                    <div className="thumbnail">    
                        <Link to ={"/matches"}>    
                            <img src= {process.env.PUBLIC_URL +"/images/matches.png"}/> 
                            <h1>Matches</h1>
                        </Link>      
                    </div>
                    <div className="match_info">
                        <Link to ={"/competitions"}>
                            <img src= {process.env.PUBLIC_URL +"/images/competitions.png"}/>
                            <h1>Competitions</h1>
                        </Link>
                    </div>

                </div>    
            </div>
        </div> 
    )
}
export default Home