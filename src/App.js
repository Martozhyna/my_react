// import {useState} from "react";
// import {FunctionComponent} from "./components/FunctionComponent/FunctionComponent";

import {CommentsClassComponent, PostsClassComponent} from "./components";

const App = () => {
    // const [flag, setFlag] = useState(true);
    return (
        <div className="App">
            {/*{flag && <ClassComponent name={'max'}/>}*/}
            {/*{flag && <FunctionComponent name={'max'}/>}*/}
            {/*<button onClick={() => setFlag(prev => !prev)}>Hide</button>*/}
            {/*<PostsClassComponent/>*/}
            {<CommentsClassComponent/>}
        </div>
    );
}

export {App};
