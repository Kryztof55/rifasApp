import React, { useEffect } from 'react'
import style from './style.scss'
import Card from '../../components/moleculas/card'
import Container from '@material-ui/core/Container'
import Text from '../../components/atomos/text'

import * as actions from '../../actions/actions'
import {useDispatch, useSelector} from 'react-redux'

const ContainerProductList = () => {
    const categorias = useSelector(state => state.categoriasReducer.categorias)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getCategorias())
    },[])
    
    return (
        <React.Fragment>
            <Container>
                <Text className="category" text="Categoría"/>
                <div className="ContainerProductList">
                    {categorias.hotSale.map(item => (
                        <Card key={item.id} articulo={item.articulo} cantidadBoletos={item.cantidadBoletos} vendidos={item.vendidos} id={item.id} sorteo={item.sorteo} image={item.img}/>
                    ))}
                </div>
            </Container>
        </React.Fragment>
    )
}

export default ContainerProductList