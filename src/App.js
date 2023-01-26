import {useEffect, useState} from "react";

import {CommentForm, Comments, UserForm, Users} from "./components";
import {commentService, userService} from "./services";
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers([...data]));
    }, []);
    useEffect(() => {
        commentService.getAll().then(({data}) => setComments([...data]));
    }, []);

  return (
      <div className="App">
          <div className={'mainUsers'}>
              <UserForm setUsers={setUsers}/>
              <Users users={users}/>
          </div>
          <div className={'mainComments'}>
              <CommentForm setComments={setComments}/>
              <Comments comments={comments}/>
          </div>

      </div>
  );
}

export {App};
