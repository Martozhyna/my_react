import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import {userService} from "../../services";
import css from './RegisterPage.module.css';

const RegisterPage = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const registerUser = async (user) => {
        try {
            await userService.create(user);
            navigate('/login');
        } catch (e) {
            setError(e.response.data.detail);
        }

    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input className={css.register} type="text" placeholder={'username'} {...register('username')}/>
                    <input className={css.register} type="text" placeholder={'password'} {...register('password')}/>
                    <button className={css.btn}>Register</button>
                </form>
            </div>
            {
                error &&
                <div>
                    {JSON.stringify(error)}
                </div>
            }
        </div>
    )

}
export {RegisterPage}