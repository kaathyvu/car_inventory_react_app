import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';

interface inputType {
    name: string;
    placeholder: string;
}

export const Input = forwardRef((props:inputType, ref) => {
    return (
        <TextField
            variant = 'outlined'
            margin = 'dense'
            inputRef = {ref}
            fullWidth
            type = 'text'
            {...props}
        ></TextField>
    )
})