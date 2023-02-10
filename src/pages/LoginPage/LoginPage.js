import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {authService} from "../../services";
import css from './LoginPage.module.css';

const LoginPage = () => {
    const {register,handleSubmit} = useForm();
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    const login = async (userCredential) => {

        try {
             await authService.login(userCredential);
            navigate('/cars');
        } catch (e) {
            if (e.response.status === 401) {
                setErrors(e.response.data);
            }
        }

    };

    return (
        <div>

            <div>
                <form onSubmit={handleSubmit(login)}>
                    <input className={css.login} type="text" placeholder={'username'} {...register('username')}/>
                    <input className={css.login} type="text" placeholder={'password'} {...register('password')}/>
                    <button className={css.btn}>Login</button>
                </form>
            </div>

            {
                errors?.detail &&
                <div>
                    {errors.detail}
                </div>
            }

        </div>

    );
}
export {LoginPage}