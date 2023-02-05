//третій файл
//після цього створюємо все як в минулій домашній роботі, тільки без сервісів і конфігів: компоненти тварини, окремо компоненту коти та собаки;
// сторінки для тварин та домашню + форму для тварин та валідатор

import {useContext} from "react";

import {StateContext} from "../hoc/StateProvider";

const useAppReducer = (item) => item(useContext(StateContext)); //хук з нашими усіма редюсерами, які ми створили

export {
    useAppReducer
}