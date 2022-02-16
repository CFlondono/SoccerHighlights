import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav>  
            <div className="navbar">
                {/* <div className="logo"> */}
                <Link to ={"/"}><img src= {process.env.PUBLIC_URL +"/images/Golazo.png"}/></Link>
                    {/* <h4>The most recent best goals from around world</h4> */}
                {/* </div>   */}
                {/* <div className="navbar-links"> */}
                    {/* <a href="#" className="toggle-button">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </a> */}
                    <h4>
                        {/* <ul> */}
                        <Link to ={"/"}>Home</Link>
                        <Link to ={"/matches"}>Matches</Link>
                        <Link to ={"/competitions"}>Competitions</Link>
                        {/* </ul> */}
                    </h4>
                {/* </div> */}
            </div>
        </nav>
    )
}
export default Navbar