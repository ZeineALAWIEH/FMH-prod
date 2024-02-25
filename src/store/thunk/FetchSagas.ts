import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Get all sagas
export const fetchSagas = createAsyncThunk('sagas/fetchSagas', async () => {

    const { data } = await axios.get(`http://localhost/public_html/oclock-www/Apotheose/projet-15-find-my-hero-back/public/api/sagas`); 

    return data;

});


//get one specific saga
export const fetchSingleSaga = createAsyncThunk('sagas/fetchSingleSaga', async (SagaId:number|string|undefined) => {

    const { data } = await axios.get(`http://localhost/public_html/oclock-www/Apotheose/projet-15-find-my-hero-back/public/api/sagas/${SagaId}`);
        
    return data;

});