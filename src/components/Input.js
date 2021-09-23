import React, {forwardRef} from 'react';
import TextField from "@material-ui/core/TextField"

export const input = forwardRef((props, ref) =>{
    return (
        <TextField variant='outlined'
        margin='normal' innerRef={ref} fullwidth {...props} />
    )
})