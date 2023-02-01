import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {carValidator} from "../../validators";
import {carService} from "../../sevices";


function CarForm ({setCars,updateCar}) {
    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({mode: "onChange",resolver: joiResolver(carValidator)});

    useEffect(()=>{
        if (updateCar) {
            setValue('brand', updateCar.brand);
            setValue('price', updateCar.price);
            setValue('year', updateCar.year);
        }
    },[setValue, updateCar])

    const submit = async (car) => {
        if (updateCar) {
            const {data} = await carService.updateById(updateCar.id, car);
            setCars(prev => [...prev]);
            reset();

        } else {
            const {data} = await carService.create(car);
            setCars(prev => [...prev, data]);
            reset();
        }

    }

    return (

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar?'update':'create'}</button>
        </form>
    )
}

export {CarForm}