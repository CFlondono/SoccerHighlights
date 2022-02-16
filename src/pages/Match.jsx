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
                
                    <h3>Whatch the match: {props.matches[index].matchviewUrl}</h3>
                    <h3>For the competition information: {props.matches[index].matchviewUrl}</h3>
                </div>

        </section>
    )
}
export default Match