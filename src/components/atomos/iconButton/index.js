import React from 'react'
import Button from '@material-ui/core/Button';


const IconButton = ({icon}) => {
    return(
        <Button variant="contained" color="primary">
            <span className="material-icons">{icon}</span>
        </Button>
    )
}
export default IconButton