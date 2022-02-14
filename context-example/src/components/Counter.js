import { useContext } from "react";
import  { CounterContext } from "../reducerExample/CounterContext";

const Counter = () => {

    const { count, dispatch} = useContext(CounterContext);
    
    const submitHandler = (e) => {
        e.preventDefault();
    }

    return(
        <div className='counter'>
            <h3>{count}</h3>
            <button>+1</button>
            <button>+5</button>
            <form onSubmit={submitHandler}>
              <input type='number'></input>
              <button>+user_value</button>
            </form>   
        </div>
    )
}

export default Counter;