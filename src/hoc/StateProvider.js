import {createContext, useReducer} from "react";

import {catReducer, initialCat} from "../reducers";
import {dogReducer, initialDog} from "../reducers/dogReducer";

const StateContext = createContext(null);

const StateProvider = ({children}) => {

    const reducers = {
        catReducer: useReducer(catReducer, null, initialCat),
        dogReducer: useReducer(dogReducer,null,initialDog)
};

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
}

export {
    StateContext,
    StateProvider
};