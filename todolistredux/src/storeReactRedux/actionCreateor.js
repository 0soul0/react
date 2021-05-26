import {CHANGE_INPUT_VALUE,ADD_INPUT_VALUE,DELETE_INPUT_VALUE} from './actionType'

export const getChangeInputValueAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddInputValueAction = ()=>({
    type:ADD_INPUT_VALUE,
})

export const getDeleteInputValueAction = (index)=>({
    type:DELETE_INPUT_VALUE,
    index
})