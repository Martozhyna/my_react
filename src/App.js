import {Header, Posts, Users} from "./components";
import './App.css';

const App = () => {
  return (
      <div className="App">
        <Header/>
          <div className={'block'}>
              <div>
                  <h2>Users:</h2>
                  <Users/>
              </div>
              <div>
                  <h2>Posts:</h2>
                  <Posts/>
              </div>

          </div>
      </div>
  );
}

export {App};
