import {useEffect, useState, useRef} from 'react';


const Ref = () => {
    const [text, setText] = useState('');
    // const [renderCount, setRenderCount] = useState(0);
    const renderCount = useRef(0);
    // renderCount = { current: 0 }
    const inputRef=useRef();
    const textRef = useRef('');

    function focus(){
        inputRef.current.focus();
        // inputRef.current.value = 'Some other value'
    }

    useEffect( () => {
    //    setRenderCount( prevRender => prevRender + 1)
    //  renderCount.current=renderCount.current + 1
        textRef.current = text
    }, [text])

    return(
        <>
            <h2>Use Ref Working</h2>
           <input 
                ref={inputRef}
                type='text' 
                value={text} 
                onChange={ e => setText(e.target.value)} 
                style={{marginTop: '10px'}}></input>
           <div>The new text is {text} and the previous text was {textRef.current}</div>
           <div>The component was rendered {renderCount.current} times</div>
           <button onClick={focus}>Focus Input area</button>
        </>
    )
}

export default Ref;