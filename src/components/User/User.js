import {useDispatch} from "react-redux";

import {userAction} from "../../redux";
import css from './User.module.css'

const User = ({user}) => {
    const {id, name, email} = user;
    const dispatch = useDispatch();
    return (
        <div className={css.User}>
            <h3>{id}. {name}</h3>
            <p>Email: {email}</p>
            <button onClick={() => dispatch(userAction.setSelectedUser(user))}>select</button>
            <button onClick={() => dispatch(userAction.getById({id}))}>apiSelect</button>
        </div>
    )
}
export {User}