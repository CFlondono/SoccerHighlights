
function Matches(props){
    // function createMarkup(match) {
    //     return {__html: match.videos[0].embed};
    //   }
    
    const allMatches = props.matches.map((match,idx) => {
        return(
            <div className='card' key={idx}>
                <h5>Match:{match.title}</h5>
                <h6>Date:{match.date}</h6>
                {/* <div dangerouslySetInnerHTML={createMarkup(match)}> */}
                {/* </div> */}
            </div>
        )
    })
 return (
            <section className='container'>
                    {allMatches}

            </section>
    )
}
export default Matches