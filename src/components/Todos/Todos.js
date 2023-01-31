import {useEffect, useState} from "react";

import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos([...data]));
    }, []);
    return (
        <>
            {
                todos.map(value => <Todo key={value.id} todo={value}/>)
            }
        </>
    );
}
export {Todos}