import css from './Album.module.css';

const Album = ({album}) => {
    const {id, userId, title} = album;

    return (
        <div className={css.album}>
            <p><b>{id}</b>. <b>Title:</b> {title}</p>
            <p><b>UserId:</b> {userId}</p>
        </div>
    )
}
export {Album}