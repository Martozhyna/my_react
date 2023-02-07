import {useDispatch} from "react-redux";

import {postAction} from "../../redux";
import css from './Post.module.css';

const Post = ({post}) => {
    const {id, title, body} = post;
    const dispatch = useDispatch();
    return (
        <div className={css.Post}>
            <h3>{id}. {title}</h3>
            <p>Body: {body}</p>
            <button onClick={() => dispatch(postAction.setSelectedPost(post))}>Select</button>
            <button onClick={() => dispatch(postAction.getById({id}))}>apiSelect</button>
        </div>
    )
}
export {Post}