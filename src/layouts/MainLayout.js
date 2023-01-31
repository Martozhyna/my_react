import {Outlet, useNavigate} from "react-router-dom";

import {Header} from "../components";
import css from './MainLayout.module.css';


const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
           <Header/>
            <div className={css.button}>
                <button onClick={() => navigate(-1)}>prev</button>
                <button onClick={() => navigate(1)}>next</button>
            </div>
            <Outlet/>
        </div>
    )
}
export {MainLayout}