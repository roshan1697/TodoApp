import { todoState } from "../authState";
import { selector } from "recoil";

export const userTodoState = selector({
    key:'userTodoState',
    get:({get})=>{
        const state  = get(todoState)
        return state.isTodo
    }

})