import {Todos} from "../../components";
import css from './TodosPage.module.css';

const TodosPage = () => {
    return (
        <div className={css.todos}>
            <Todos/>
        </div>
    )
}
export {TodosPage}