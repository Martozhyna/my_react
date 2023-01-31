import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments([...data]));
    }, []);
    return (
        <>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </>
    )
}
export {Comments}