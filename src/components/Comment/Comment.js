import {useNavigate} from "react-router-dom";

import css from './Comments.module.css';

const Comment = ({comment}) => {
    const {id, name, body, email, postId} = comment;

    const navigate = useNavigate();

    return (
        <div className={css.comment}>
            <p><b>{id}</b>. <b>Name:</b> {name}</p>
            <p><b>PostId:</b> {postId}</p>
            <p><b>Body:</b> {body}.</p>
            <p><b>Email:</b> {email} </p>
            <button onClick={() =>navigate(postId.toString())}>Get post</button>
            {/*<Link to={postId.toString()}>Get to Post</Link>*/}
        </div>
    )
}
export {Comment}