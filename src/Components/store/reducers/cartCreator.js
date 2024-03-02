import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchAllBooks from "./bookListCreator";

const addItemToCart = createAsyncThunk('Cart/addItem', async (payload, thunkApi) => {
    try {
      const responce = await api.getCart()
        return responce.data
    }catch (err) {
        return thunkApi.rejectWithValue('Failed to fetch.Please try afaun')
    }
})

export const addToCart = createAsyncThunk('Cart/addItem', async (payload, thunkApi) => {
    try{
        const {books} = thunkApi.getState().boolist
    }catch (err) {
        return thunkApi.rejectWithValue('smt has gone wrong')
    }
})

export default fetchAllCart