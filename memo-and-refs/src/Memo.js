import { useState, useMemo } from "react";

const Memo = () => {

    const[number, setNumber] = useState(0);
    const[dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => slowFunction(number), [number]);

    const themeStyles = dark ? { backgroundColor: 'black', color: 'white'} : { backgroundColor: 'white', color: 'black'}

    return(
        <>
            <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/> <br></br>
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}


function slowFunction(num){
    for(let i=0; i<1110000000; i++){}
    return num*2;
}
export default Memo;