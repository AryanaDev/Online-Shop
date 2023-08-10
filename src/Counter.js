import React,{useState,useMemo} from "react";

function Counter (){

    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(0)

    const handleClick1 = () =>{
        setCounter1(counter1 + 1)
    }
    const handleClick2 = () =>{
        setCounter2(counter2 - 1)
    }

    const even = useMemo(()  =>{
        let i = 0
        while(i < 10) i++
        if(counter1 %2 === 0 ){
            return " zooj"
        }
        else{
            return "fard"
        }
    },[counter1])
    return(
        <>
        <p>{counter1}  {even}</p>
        <p>{counter2}</p>
        
        <br></br>

        <button onClick={handleClick1}>+</button>
        <button onClick={handleClick2}>-</button>
        </>
    )
}

export default Counter
