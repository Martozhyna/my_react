import css from './Todo.module.css';

const Todo = ({todo}) => {
    const {id, userId, title, completed} = todo;
    return (
        <div className={css.todo}>
            <p><b>{id}</b>. <b>Title:</b> {title}</p>
            <p><b>UserId:</b> {userId}. <b>Completed:</b> {completed.toString()}</p>
        </div>
    )
}
export {Todo}