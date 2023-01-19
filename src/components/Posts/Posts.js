import {useEffect, useState} from "react";

import {postsService} from "../../services";
import {Post} from "../Post/Post";

function Posts () {
    const [posts, setPosts] = useState([]);

    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postsService.getAll().then(value => value.data).then(value => setPosts([...value]));
    }, []);

    return (
        <div>
            {
                postDetails && <div>Body: {postDetails.body}</div>
            }
            <hr/>
            {
                posts.map(post => <Post key={post.id} id={post.id} title={post.title} setPostDetails={setPostDetails} body={post.body}/>)
            }
        </div>
    );
}
export {Posts}