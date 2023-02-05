const catActionTypes = {
    ADD_CAT: 'ADD_CAT',
    DELETE: 'DELETE'

};

const catAction =  {
    ADD_CAT: (cat) => ({type: catActionTypes.ADD_CAT, payload: cat}),
    DELETE: (id) => ({type: catActionTypes.DELETE, payload: id}),
};

const initialCat = () => [];

const catReducer = (state,action) => {
    switch (action.type) {
        case catActionTypes.ADD_CAT:
            const sliceCat = state.slice(-1);
            const id = sliceCat.length ? sliceCat[0].id + 1 : 1
            return [...state, state, id];
        case catAction.DELETE:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
}

export {
    catAction,
    initialCat,
    catReducer
}