import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks";
import {dogAction} from "../../reducers/dogReducer";

const DogForm = () => {
    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({mode: "onChange"});

    const [,dispatch] = useAppReducer(value => value.dogReducer);

    const save = (dog) => {
        dispatch(dogAction.ADD_DOG(dog))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <button>Save</button>
        </form>
    )
}
export {DogForm}