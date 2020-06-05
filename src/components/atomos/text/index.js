import React from 'react'
import style from './style.scss'

const Text = ({className, text, theme, weight, ellipsis})=>{
    return(
        <p className={className} theme={theme} weight={weight} ellipsis={ellipsis}>{text}</p>
    )
}
export default Text