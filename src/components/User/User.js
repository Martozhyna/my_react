import './User.css';

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div className={'user'}>
            <h3>{id}. {name}</h3>
            <p><b>Username:</b> {username}</p>
        </div>
    );
}
export {User}