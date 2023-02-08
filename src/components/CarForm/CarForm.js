import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {carAction} from "../../redux";
import {carValidator} from "../../validators";
import css from './CarForm.module.css';

const CarForm = () => {
    const {register, handleSubmit, reset, setValue, formState: {isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);

    const save = async (car) => {
        await dispatch(carAction.create({car}));
        reset();
    };

    const update = async (car) => {
        await dispatch(carAction.updateById({id: carForUpdate.id, car}));
        reset();
    };

    return (
            <form onSubmit={handleSubmit(carForUpdate ? update : save )}>
                <input className={css.form} type="text" placeholder={'brand'} {...register('brand')}/>
                <input className={css.form} type="text" placeholder={'price'} {...register('price')}/>
                <input className={css.form} type="text" placeholder={'year'} {...register('year')}/>
                <button className={css.button} disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            </form>
    )
};
export {CarForm};