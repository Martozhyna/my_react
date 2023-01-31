import {Comments} from "../../components";
import css from './CommentsPage.module.css';

const CommentsPage = () => {
    return (
        <div className={css.comments}>
            <Comments/>
        </div>
    )
}
export {CommentsPage}