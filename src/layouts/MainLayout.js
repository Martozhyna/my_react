import {Outlet, useNavigate} from "react-router-dom";

import {Header} from "../components";

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header/>
            <div>
                <button onClick={() => navigate(+1)}>prev</button>
                <button onClick={() => navigate(-1)}>next</button>
            </div>
            <Outlet/>
        </div>
    );
}
export {MainLayout}