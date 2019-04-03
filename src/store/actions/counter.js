import {ADD_VALUE, DECREMENT, INCREMENT, SUBTRACT_VALUE} from "./actionsTypes";

export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const  decrement = () => {
    return {
        type: DECREMENT
    }
}

export const  addValue = () => {
    return {
        type: ADD_VALUE,
        value: 5
    }
}

export const  subtractValue = (val) => {
    return {
        type: SUBTRACT_VALUE,
        value: val
    }
}
