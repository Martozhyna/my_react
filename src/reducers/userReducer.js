//спершу робимо цей файл

const userActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
} //використовуємо в світч щоб не помилитися

const userActions = {
    ADD: (item) => ({type: userActionTypes.ADD, payload: item}),
    DELETE_BY_ID: (id) => ({type: userActionTypes.DELETE_BY_ID, payload: id})
} //логіка, як в сервісах раніше, де методом гет ол діставали всіх юзерів (використовуємо в ЮзерФорм при функції створення і в Юзер при функції видалення

const initialUsers = () => [] //початковий стан як в useState


const myUserReducer = (state, action) => {
    switch (action.type) {
        case userActionTypes.ADD:
            const slice = state.slice(-1);
            const id = slice.length ? slice[0].id + 1 : 0
            return [...state, {id, ...action.payload}]

        case userActionTypes.DELETE_BY_ID:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index, 1)
            return [...state]
    }
} // прописуємо безпосередню логіку кожної дії

export {
    userActions,
    myUserReducer,
    initialUsers
}
