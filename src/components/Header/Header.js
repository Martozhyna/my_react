import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={''}>home</NavLink>
            <NavLink to={'animals'}>animals</NavLink>
        </div>
    )
}
export {Header}