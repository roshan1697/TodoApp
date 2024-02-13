import { atom } from "recoil";

export const authState = atom({
    key:'authState',
    default:{
        token:null,
        username:null
    }
})

export const todoState = atom({
    key:'todoState',
    default:{
        isLoading:true,
        isTodo:[]
    }
})