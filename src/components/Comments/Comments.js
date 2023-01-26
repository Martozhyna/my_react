import {Comment} from "../Comment/Comment";
import './Comments.css';

const Comments = ({comments}) => {
    return (
        <div className={'comments'}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
}
export {Comments}