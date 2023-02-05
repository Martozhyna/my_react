import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AnimalsPage, HomePage, NotFoundPage} from "./pages";

const App = () => {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<HomePage/>}/>
              <Route path={'animals'} element={<AnimalsPage/>}/>
              <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>

      </Routes>
  );
}

export {App};
