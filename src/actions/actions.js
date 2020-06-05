import * as actionTypes from './actionTypes'

const getCategorias = () =>{
    return(dispatch) =>{
        fetch("http://localhost:3002/categorias")
        .then(response => response.json())
        .then(json => {
            dispatch({
                type:actionTypes.GET_CATEGORIAS,
                categorias: json
            })
        })
    }
}
export {
    getCategorias
}