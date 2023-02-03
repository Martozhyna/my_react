import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, HomePage, LoginPage, NotFoundPage, PostPage, TodosPage} from "./pages";
import {RequireAuth} from "./hoc/RequireAuth";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<RequireAuth>
                    <CommentsPage/>
                </RequireAuth>}/>
                <Route path={'comments/:postId'} element={<PostPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export {App};
