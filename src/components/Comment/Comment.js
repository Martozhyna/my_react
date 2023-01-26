import './Comment.css';

const Comment = ({comment}) => {
    const {id,postId,name,body} = comment
    return (
        <div className={'comment'}>
            <h3>{id}. {name}</h3>
            <p><b>PostId:</b> {postId}. <b>Body:</b> {body}</p>
        </div>
    )
}
export {Comment}