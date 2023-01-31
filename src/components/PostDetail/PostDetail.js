import css from './PostDetail.module.css';

const PostDetail = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className={css.post}>
            <p><b>{id}.</b> <b>Title:</b> {title}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    )
}
export {PostDetail}