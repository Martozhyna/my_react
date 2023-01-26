import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentService} from "../../services";
import {commentValidator} from "../../validators";
import './CommentForm.css';



const CommentForm = ({setComments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "onChange",resolver: joiResolver(commentValidator)});

    const submit = async (newComment) => {
        const {data} = await commentService.create(newComment);
        setComments(prev => [...prev, data]);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={'commentName'}>
                <input type="number" placeholder={'postId'} {...register('postId')}/>
                {errors.postId && <div>{errors.postId.message}</div>}
            </div>
            <div className={'commentName'}>
                <input type="text" placeholder={'name'}{...register('name')}/>
                {errors.name && <div>{errors.name.message}</div>}
            </div>
            <div className={'commentName'}>
                <input type="text" placeholder={'body'}{...register('body')}/>
                {errors.body && <div>{errors.body.message}</div>}
            </div>
            <div className={'button'}>
                <button disabled={!isValid}>Create</button>
            </div>

        </form>
    )
}
export {CommentForm}