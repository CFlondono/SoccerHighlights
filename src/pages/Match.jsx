import { getByTitle } from "@testing-library/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Match(props){
    const {index} = useParams()
    console.log('useparamasthingy',index)
    console.log(props.matches)

    function createMarkup() {
        console.log(props.matches)
        return {__html: props.matches[index].videos[0].embed};
      }

    
 return (
        <section className='container'>
            <div className='card_video'>
                <h2>{props.matches[index].videos[0].title}</h2>
                <h2>Match: {props.matches[index].title}</h2>
                    <div iframe-container>
                        <div dangerouslySetInnerHTML={createMarkup()}>
                        </div>
                    </div>
            </div>
            <div className="card">
                    <h2>Competition: {props.matches[index].competition}</h2>
                
                    <a href={`${props.matches[index].matchviewUrl}`}  target="_blank"><h3>Whatch the complete match here</h3></a>
                    <a href={`${props.matches[index].competitionUrl}`}  target="_blank"><h3>About the competition</h3></a>
                </div>

        </section>
    )
}
export default Match