import { createContext, useReducer} from 'react';

export const CounterContext = createContext();

const countReducer = (state, action) => {
    //  addAction = { type: 'ADD_ONE'}
    switch(action.type){
        case 'ADD_ONE':
            return state + 1;
        case 'ADD_FIVE':
            return state + 5;
        case 'ADD_NUM':
            return state + action.num; 
        default:
            return state;      
    }
}
// dispatch({type: 'ADD_ONE'});
// dispatch({type: 'ADD_ONE', num: 5});

const CounterContextProvider = (props) => {

    const [count, dispatch] = useReducer(countReducer, 10);
    // const [count, setCount] = useState(10);

    // const addCountBy1= () => setCount(count+1);
    // const addCountBy5= () => setCount(count+5);
    // const addCountByNum= (num) => setCount(count+num);

    //     <CounterContext.Provider value= { {count, addCountBy1, addCountBy5, addCountByNum}}>
    return(
        <CounterContext.Provider value= { {count, dispatch}}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;