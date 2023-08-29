import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Details() {
    return (
        <div>
             <h1 >Register Form</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
               
                <TextField id="outlined-basic" label="Name" variant="outlined" /><br/>
                <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
                <TextField id="outlined-basic" label="Paswword" variant="outlined" /><br/>

                <Button variant="contained">Submit</Button>


            </Box>
        </div>
    )
}
