import {CHANGE_COLOR} from '../actions/types'
const initialState = {
    color : '#00FF00'
}
//Setting the

export default function(state = initialState, action){
    switch(action.type){
        case(CHANGE_COLOR):
        let newState = {
            ...state,
            color : action.payload}
        return newState;
        default:
            return state
    }

}

