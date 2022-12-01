import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: '',
        breed: '',
        age: 1,
        weight: '',
        favorite_toy: '',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseBreed: (state, action) => { state.breed = action.payload },
        chooseAge: (state, action) => { state.age = action.payload },
        chooseWeight: (state, action) => { state.weight = action.payload },
        chooseFavToy: (state, action) => { state.favorite_toy = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseBreed, chooseAge, chooseWeight, chooseFavToy} = rootSlice.actions;