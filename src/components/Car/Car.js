import {useDispatch} from "react-redux";

import {carAction} from "../../redux";
import css from './Car.module.css';

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div className={css.carBorder}>
            <div className={css.carCenter}>
                <div className={css.car}>
                    <h3>{id}. {brand}</h3>
                    <p><b>Prise:</b>{price}. <b>Year:</b>{year}</p>
                    <button onClick={() => dispatch(carAction.setCarForUpdate(car))}>update</button>
                    <button onClick={() => dispatch(carAction.deleteById({id}))}>delete</button>
                </div>
            </div>
        </div>
    )
}
export {Car}