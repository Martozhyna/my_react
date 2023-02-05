import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks";
import {catAction} from "../../reducers";


const CatForm = () => {
    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({mode: "onChange"});

    const [,dispatch] = useAppReducer(value => value.catReducer);

    const save = (cat) => {
        dispatch(catAction.ADD_CAT(cat))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <button>Save</button>
        </form>
    )
}
export {CatForm}
