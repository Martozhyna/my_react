import {Component} from "react";

class ClassComponent extends Component{

    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {a:0,b:25} //замість useState (initialState)
    }

    componentDidMount() {
        console.log('componentDidMount');//тут робимо запит (як в UseEffect)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevState.a >= 7) {
            return 'a>=7';
        } else {
            return null
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        console.log('snapshot',snapshot);
    }

    inc(){
        this.setState(prev=>({a:prev.a + 1,b:prev.b - 1})); //через setState наповнюємо масив
    }

    render() {
        console.log('render');
        return (
            <div>
                <h2>A: {this.state.a}</h2>
                <h2>B: {this.state.b}</h2>
                <h3>Name: {this.props.name}</h3>
                <button onClick={()=>this.inc()}>INC</button>
            </div>
        )
    }

}

export {
    ClassComponent
}