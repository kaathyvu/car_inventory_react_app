import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseAge, chooseBreed, chooseName, chooseWeight, chooseFavToy } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface DogFormProps {
    id? : string;
    data? : {};
}

interface DogState {
    name: string;
    breed: string;
    age: number;
    weight: string;
    favorite_toy: string
}

export const DogForm = (props:DogFormProps) => {
    const dispatch = useDispatch();
    let { dogData, getData } = useGetData();
    const store = useStore()
    const { register, handleSubmit } = useForm({})

    const onSubmit = async(data:any, event:any) => {
        console.log(props.id)
        if (props.id!) {
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseBreed(data.breed))
            dispatch(chooseAge(data.age))
            dispatch(chooseWeight(data.weight))
            dispatch(chooseFavToy(data.favorite_toy))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <Input {...register('name')} name='name' placeholder='Enter Name'/>
                </div>
                <div>
                    <label htmlFor='breed'>Breed</label>
                    <Input {...register('breed')} name='breed' placeholder='Enter Dog Breed'/>
                </div>
                <div>
                    <label htmlFor='age'>Age</label>
                    <Input {...register('age')} name='age' placeholder='Enter Age'/>
                </div>
                <div>
                    <label htmlFor='weight'>Weight</label>
                    <Input {...register('weight')} name='weight' placeholder='Enter Weight'/>
                </div>
                <div>
                    <label htmlFor='favorite_toy'>Favorite Toy</label>
                    <Input {...register('favorite_toy')} name='favorite_toy' placeholder='Enter Favorite Toy'/>
                </div>

                <Button type='submit' color='error'>Submit</Button>
            </form>
        </div>
    )
}