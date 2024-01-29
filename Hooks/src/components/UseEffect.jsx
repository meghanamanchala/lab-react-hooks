import {useEffect,useState} from "react";
const UseEffect= ()=>{
    const [effect,setEffect] = useState(false);
    useEffect(() =>{
        if(effect)
        alert("content button clicked");
    },[effect])
    return(
        <div>
            {
                effect?(
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat
                         doloremque harum accusamus dolore iste tenetur, expedita, ipsam quas
                          sint aperiam, asperiores quia est nisi explicabo at aut quaerat fugit.
                    </p>
                ):null
            }
            <button onClick={()=>setEffect(!effect)}>Content</button>
        </div>
    )
}
export default UseEffect;