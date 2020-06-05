import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Text from '../../atomos/text'
import style from './style.scss'

const Card = ({articulo, cantidadBoletos, vendidos, id, sorteo, flagTheme, image}) => {
    const flag = () => {
        let media = cantidadBoletos / 2
        if(vendidos <= media - 20){
            return "success"
        }
        if (vendidos >= media - 20 && vendidos <= media + 20){
            return "warning"
        }
        else{
            return "alert"
        }

    }
    return(
        <Paper elevation={3}>
            <div className="card">
                <div className="flag" theme={flag()}>
                    <Text className="title" theme="white" text={`${vendidos} / ${cantidadBoletos}`} />
                </div>
                
                <figure className="imagen">
                    <img src={image} />
                </figure>
                <div className="descripcion">
                    <Text className="title" text={articulo} ellipsis="true"/>
                    <Text className="paragraph" text="Fecha de Sorteo" />
                    <Text className="paragraph" theme="purple" weight="bold" text={sorteo} />
                </div>
            </div>
        </Paper>
    )
}

export default Card