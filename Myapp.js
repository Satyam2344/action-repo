import React, {  useRef, useState } from 'react'

const Myapp = () => {
    
    const [val, setVal] = useState("");
    
    const refElem = useRef(0);

    

    const change = (event) => {
        setVal(event.target.value);
        refElem.current = refElem.current +  1 
        // console.log(refElem.current);
    
    }
    // const back = () => {
    //     setBg("red");
    // }
    // useEffect(() => {
    //     alert("running useeffect")
    // }, [])

    // const submit = () =>{

    // }

    console.log(refElem.current);
    return (
        <div>
            <h1>count: {refElem.current}</h1>
            <input type='text' value={val} onChange={change}/>
            {/* <button type ='submit' onClick={submit} >click here</button> */}

        </div>

    )
}

export default Myapp
