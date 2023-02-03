import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useAuthContext} from "../../hooks";

const Header = () => {
    const {user} = useAuthContext();
    return (
        <div className={css.Header}>
            <NavLink to={''}>HOME</NavLink>
            <NavLink to={'todos'}>TODOS</NavLink>
            <NavLink to={'albums'}>ALBUMS</NavLink>
            <NavLink to={'comments'}>COMMENTS</NavLink>
            {
                user && <div>
                    {user} <button>LogOut</button>
                </div>
            }
        </div>
    )
}
export {Header}