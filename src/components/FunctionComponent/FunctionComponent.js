import {useEffect, useState} from "react";

const FunctionComponent = ({name}) => {
    console.log('constructor');

    const [state, setState] = useState({a: 0, b: 25});

    useEffect(() => {
        console.log('componentDidMount');
        return ()=>{
            console.log('componentWillUnmount');
        }
    }, []);

    useEffect(() => {
        console.log('componentDidUpdate');
    },[state])

    const inc = () => {
        setState(prev=>({a:prev.a + 1,b:prev.b - 1}));
    };

    return (
        <div>
            {console.log('render')}
            <div>
                <h2>A: {state.a}</h2>
                <h2>B: {state.b}</h2>
                <h3>Name: {name}</h3>
                <button onClick={()=>inc()}>INC</button>
            </div>
        </div>
    )
}
export {FunctionComponent}