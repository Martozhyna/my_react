import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {carAction} from "../../redux";
import {Car} from "../Car/Car";
import css from './Cars.module.css';

const Cars = () => {
    const {cars,prev,next} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(carAction.getAll({page:query.get('page')}));
    }, [dispatch,query]);

    return (
        <div>

            <div className={css.btn}>
                <button disabled={!prev} onClick={() => setQuery(query => ({page:+query.get('page')-1}))}>prev</button>
                <button disabled={!next} onClick={() => setQuery(query => ({page:+query.get('page')+1}))}>next</button>
            </div>

            <div className={css.cars}>
                {
                    cars.map(car => <Car key={car.id} car={car}/>)
                }
            </div>
        </div>

    );
}
export {Cars}