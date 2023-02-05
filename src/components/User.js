import {useAppReducer} from "../hooks/useAppReducer";
import {userActions} from "../reducers/userReducer";

const User = ({user}) => {
    const [, dispatch] = useAppReducer(value => value.userReducer);

    const {id, name, age} = user;
    return (
        <div>
            <h3>{id}. {name}</h3>
            <p><b>Age:</b> {age}</p>
            <button onClick={() => dispatch(userActions.DELETE_BY_ID(id))}>delete</button>
        </div>
    )
}
export {User}