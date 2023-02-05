import {CatForm, Cats, DogForm, Dogs} from "../../components";
import css from './AnimalPage.module.css';

const AnimalsPage = () => {
    return (
        <div>
            <div className={css.animalsForm}>
                <CatForm/>
                <DogForm/>
            </div>
            <div className={css.animalsForm}>
                <Cats/>
                <Dogs/>
            </div>
        </div>
    )
}
export {AnimalsPage}