import callApi from "utils/callApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    plants: [],
    isLoading: false,
    err: null
}

const fetchPlants = createAsyncThunk('plant/fetchPlants', (thunkAPI) => 
callApi({
    method: 'GET',
    endPoint: '/plant/fetchPlants',
    thunkAPI: thunkAPI 
}))

export const plantSlice = createSlice({
    name: 'plant',
    initialState: initialState,
    extraReducers: {
        [fetchPlants.pending]: (state, action) => {
            state.isLoading = true;
            state.err = null
        },
        [fetchPlants.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.plants = action.payload.payload
        },
        [fetchPlants.rejected]: (state, action) => {
            state.isLoading = false;
            state.err = action.payload.message
        } 
    }
});

export const selectPlants = (store) => store.plants

