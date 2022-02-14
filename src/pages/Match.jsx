import { getByTitle } from "@testing-library/react";
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
            <div className='card'>
                <h1>{props.matches[index].videos[0].title}</h1>
                    <div iframe-container>
                        <div dangerouslySetInnerHTML={createMarkup()}>
                        </div>
                    </div>
            </div>
        </section>
    )
}
export default Match