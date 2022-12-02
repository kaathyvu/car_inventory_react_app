
import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from '@mui/material';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { DogForm } from '../DogForm'
import { theme } from '../../Theme/themes';

const myStyles = {
    updateButton: {
        margin: theme.spacing(1),
        color: theme.palette.error.light,
        backgroundColor: theme.palette.error.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.error.contrastText,
            color: theme.palette.error.dark
        }
    },
    dataTable: {
        fontFamily: 'roboto',
        height: 400, 
        width: '100%',
        display:'flex',
    },
    dashboardButton: {
        backgroundColor: '#765f61',
        margin: '1em',
        padding: '0',
        color: 'white',
        height: '50px',
        width: '240px',
        border: 'none',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        fontSize: '16px',
        lineHeight: '48px',
        display: 'inline-block',
        borderRadius: '1px',
        fontFamily: 'roboto',
        cursor: 'pointer',
    },
    textStyle: {
        fontFamily: 'Roboto;',
        textAlign: 'center',
    },
    containerStyle: {
        marginTop: '2em',
        fontFamily:'roboto',
    },
}
const columns: GridColDef[] = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'breed',
        headerName: 'Breed',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 110,
        editable: true,
        type: 'number',
    },
    {
        field: 'weight',
        headerName: 'Weight',
        width: 110,
        editable: true,
    },
    {
        field: 'favorite_toy',
        headerName: 'Favorite Toy',
        width: 110,
        editable: true,
    },
];

interface gridData{
    data: {
        id?: string;
    }
}

export const DataTable = () => {
    let { dogData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true);
    };

    let handleClose = () => {
        setOpen(false);
    };

    let deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData)

    const myAuth = localStorage.getItem('myAuth')
    console.log(myAuth)

    if (myAuth == 'true') {
        return (
            <Box>
                <DataGrid
                    rows={dogData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={(newSelectionModel) => {setData(newSelectionModel);}}
                    {...dogData}
                    sx={myStyles.dataTable}
                />
    
                <Button sx={myStyles.updateButton} onClick={handleOpen} variant="contained">Update</Button> 
                <Button onClick={deleteData} variant="contained" color="error">Delete</Button>
    
                <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-form-title">
                    <DialogTitle id='dialog-form-title'>Update Dog</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Dog ID: {gridData[0]}</DialogContentText>
                            <DogForm id={`${gridData[0]}`}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="error">Cancel</Button>
                    </DialogActions>
                </Dialog>
    
            </Box>
        )
    } else {
        return (
            <Container maxWidth='sm' sx={myStyles.containerStyle}>
                <Typography sx={myStyles.textStyle}>
                    <p>Please Sign in to View Your Data</p>
                    <Button sx={myStyles.dashboardButton} href='/signin'>Sign In Here</Button>
                </Typography>
            </Container>
        )
    }
}

