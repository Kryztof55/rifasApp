import * as actionType from '../actions/actionTypes'
import initialState from '../reducers/initialState'

export const categoriasReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.GET_CATEGORIAS :
            return{
                ...state,
                categorias: action.categorias
            }
        default:
            return state
    }
}