//другий файл
import {createContext, useReducer} from "react";

import {initialUsers, myUserReducer} from "../reducers/userReducer";

const StateContext = createContext(null);//створюємо свій контекст

const StateProvider = ({children}) => {//передаємо чілдренів

    const reducers = {
        userReducer: useReducer(myUserReducer, null, initialUsers)//безпосередньо сам редюсер
    }
//передаємо як аргумент наш редюсер в усі чілдрени, щоб могти їх викликати на будь-якому рівні
    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {StateProvider,StateContext};