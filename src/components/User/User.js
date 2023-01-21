import {useState} from "react";

import {postService} from "../../services";
import {Post} from "../Post/Post";

function User ({user}) {
    const {id, name, username} = user;
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        postService.getByUserId(id).then(({data}) => setPosts([...data]));
    }
    return (
        <div>
            <h3>{id}. {name}</h3>
            <p><b>Username:</b> {username}</p>
            {!posts.length && <button onClick={() => getPosts()}>Show posts</button>}
            {!!posts.length && <button onClick={() => setPosts([])}>Hide</button>}
            {
                posts.map(post => <Post key={post.id} post={post}/>)

            }
        </div>
    );
}
export {User}