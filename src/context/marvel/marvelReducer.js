import { SEARCH_CHARACTERS, SET_LOADING  } from '../types';


export default (state, action) => {
    switch(action.type){
        case SET_LOADING:
            return {
                ...state, 
                loading: true
            }
        case SEARCH_CHARACTERS:
            console.log(state)
            return {
                ...state, 
                characters: action.payload,
                loading: false
            }
        default:
            return state
    }
}
