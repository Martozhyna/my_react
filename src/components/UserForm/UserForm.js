import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userValidator} from "../../validators";
import {userService} from "../../services";
import './UserForm.css';

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "onChange",resolver: joiResolver(userValidator)});

    const submit = async (user) => {
        const {data} = await userService.create(user);
        setUsers(prev => [...prev, data]);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={'username'}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.name && <div>{errors.name.message}</div>}
            </div>
            <div className={'username'}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                {errors.username && <div>{errors.username.message}</div>}

            </div>
            <div className={'button'}>
                <button disabled={!isValid}>Create</button>
            </div>
        </form>
    );
}
export {UserForm}