import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postsService} from "../../services";
import {PostDetail} from "../../components";
import css from './PostPage.module.css';

const PostPage = () => {
    const {postId} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data));
    }, [postId]);

    return (
        <div className={css.posts}>
            {
             post &&   <PostDetail post={post}/>
            }

        </div>
    )
}
export {PostPage}