import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carAction} from "../../redux";
import {Car} from "../Car/Car";
import css from './Cars.module.css';

const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carAction.getAll());
    }, [dispatch]);

    return (
        <div className={css.cars}>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    )
}
export {Cars}