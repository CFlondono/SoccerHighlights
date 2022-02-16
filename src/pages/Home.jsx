import { Link } from "react-router-dom"
function Home(){
    return (
        <div className="container">
            <div className="card">
            <h1>The most recent best goals from around world</h1>
                <div className="card-home">
                    <div className="matches">
                        <Link to ={"/competitions"}>
                            <img src= {process.env.PUBLIC_URL +"/images/competitions.png"}/>
                            <h1>Competitions</h1>
                        </Link>
                    </div>
                    <div className="competitions">
                        <Link to ={"/matches"}>    
                            <img src= {process.env.PUBLIC_URL +"/images/matches.png"}/> 
                            <h1>Matches</h1>
                        </Link>      
                    </div>
                </div>    
            </div>
        </div>    
    )
}
export default Home