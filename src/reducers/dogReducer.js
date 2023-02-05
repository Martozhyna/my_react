const dogActionTypes = {
    ADD_DOG: 'ADD_DOG',
    DELETE_DOG: 'DELETE_DOG'

};

const dogAction =  {
    ADD_DOG: (dog) => ({type: dogActionTypes.ADD_DOG, payload: dog}),
    DELETE_DOG: (id) => ({type: dogActionTypes.DELETE_DOG, payload: id}),
};

const initialDog = () => [];

const dogReducer = (state,action) => {
    switch (action.type) {
        case dogActionTypes.ADD_DOG:
            const sliceDog = state.slice(-1);
            const idDog = sliceDog.length ? sliceDog[0].id + 1 : 1
            return [...state, state, idDog];
        case dogAction.DELETE_DOG:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
}

export {
    dogAction,
    initialDog,
    dogReducer
}