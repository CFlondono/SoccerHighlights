function Navbar(){
    return (
        <nav>
            <img src= {process.env.PUBLIC_URL +"/images/golazo.png"}/>
            <h3>The most recent best goals from around world</h3>
            <a href="/">Home</a>
            <a href="/matches">Matches</a>
            <a href="/competitions">Competitions</a>
        </nav>
    )
}
export default Navbar