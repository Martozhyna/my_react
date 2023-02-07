import {useSelector} from "react-redux";

import css from './Header.module.css';

const Header = () => {
    const {selectedUser} = useSelector(state => state.users);
    const {selectedPost} = useSelector(state => state.posts);
    return (
        <div className={css.Header}>
            <div className={css.cards}>
                {selectedUser && <h3> Name: {selectedUser.name}. Username: {selectedUser.username}</h3>}
            </div>
            <div className={css.cards}>
                {selectedPost && <h3>Title: {selectedPost.title}. UsersPost: {selectedPost.userId}</h3>}
            </div>

        </div>
    )
}
export {Header}