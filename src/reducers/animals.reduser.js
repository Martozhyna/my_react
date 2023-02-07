import {useReducer, useRef} from "react";


const animalsActionType = {
    ADD_CAT: 'ADD_CAT',
    DELETE_CAT: 'DELETE_CAT',
    ADD_DOG: 'ADD_DOG',
    DELETE_DOG: 'DELETE_DOG'
};

const reducer = (state,action) => {
    switch (action.type) {
        case animalsActionType.ADD_CAT:
            const sliceCat = state.cats.slice(-1);
            const idCat = sliceCat.length ? sliceCat.id + 1 : 1;
            return {...state, cats: [...state.cats, {idCat, name: action.payload}]};

        case animalsActionType.DELETE_CAT:
            const indexCat = state.cats.findIndex(value => value.id === action.payload)
            state.splice(indexCat, 1);
            return {...state};

        case animalsActionType.ADD_DOG:
            const sliceDog = state.dogs.slice(-1);
            const idDog = sliceDog.length ? sliceDog.id + 1 : 1;
            return {...state, dogs: [...state.dogs, {idDog,name: action.payload}]};

        case animalsActionType.DELETE_DOG:
            const indexDog = state.dogs.findIndex(value => value.id === action.payload);
            state.splice(indexDog, 1);
            return {...state};

        default:
            return state;


    }
}

function initial() {

}


const useAnimalsReducer = () => useReducer(reducer, {cats: [], dogs: []},initial);


