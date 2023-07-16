import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "http://localhost:5000"
export const getGreet = createAsyncThunk('greets/greetslice/getgreet', async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
});

const initialState = {
    greet: [],
    isLoading: false
}

const greetslice = createSlice({
    name: "greet",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGreet.pending, (state) => ({
            ...state,
            isLoading: true
        }));
        builder.addCase(getGreet.fulfilled, (state, { payload })=> ({
            ...state,
            greet: payload,
            isLoading: false,
        }));
        builder.addCase(getGreet.rejected, (state)=> ({
            ...state,
            isLoading: false
        }));
    }
});

export default greetslice.reducer;