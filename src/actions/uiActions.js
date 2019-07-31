import {CHANGE_COLOR} from './types'

const changeColor =()=>{
    return {
        type : CHANGE_COLOR,
        payload : '#FF0000'
    }
}

export default changeColor