import {useEffect, useState} from "react";

import {postService} from "../../services";
import {Post} from "../Post/Post";

function Posts ({userId}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(userId).then(({data}) => setPosts([...data]));
    }, [userId]);
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
}
export {Posts}