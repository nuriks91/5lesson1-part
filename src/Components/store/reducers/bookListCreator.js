import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api";


const fetchAllBooks = createAsyncThunk('Booklist/fetchAll', async (payload, thunkApi) => {
    try{
        const response = await api.getBooks();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue('Sorry, smth alse gone wrong.Try again later');
    }
});

export default fetchAllBooks;