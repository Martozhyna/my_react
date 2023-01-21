import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";

function Users () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll.then(({data}) => setUsers([...data]));
    }, []);
    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
}
export {Users}