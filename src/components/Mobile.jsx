
import'./Mobile.css'
function Moblie(props){
    return(
        <>
        {/* <h1>The mobile is {props.name??"Default"}</h1> */}
        <div id="main">
            <div id="child1">
            <img src={props.image}></img>
            </div>
            <div id="child2">
            <h2>{props.name}</h2>
            <ul>
               <li>{props.f1}</li>
               <li>{props.f2}</li>
               <li>{props.f3}</li>
                <li>{props.f4}</li>
                <li>{props.f5}</li>
            </ul>
            </div>
            <div id="child3">
               <h1>{props.old}</h1>
               <strike>{props.new}</strike>
</div>
           </div>
        
        </>
    )
}

export default Moblie