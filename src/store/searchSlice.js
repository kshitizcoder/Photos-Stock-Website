import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "./api";
import axios from "axios";
export const handleSearch = createAsyncThunk("handleSearch/get", async (query, { rejectWithValue }) => {


    try {
        const apiHeader = {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: "563492ad6f91700001000001a17e4339930f47a1bd94f472e2cf50b4"
            }
        }
        let { data: photoSearchctData } = await axios.get(`${BASE_URL}search?query=${query}`, apiHeader)


        return { photoSearchctData }

    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
        // throw new Error(error)
    }
})

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: {
            photoSearch: [],

        },
        isLoading: false,
        isError: false,
        isclick: false

    }


    ,
    // extraReducers: (builder) => {
    //     builder.addCase(handleSearch.fulfilled, (state, action) => {




    //     })
    // }
    extraReducers: {
        [handleSearch.pending]: (state) => {
            state.isLoading = true;
        },
        [handleSearch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data.photoSearch = action.payload.photoSearchctData

        },
        [handleSearch.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
        },
    }
})



// const reducer = (state, action) => {
//     return state;
// }
// let initialState = 0
// const [state, dispatch] = useReducer(reducer, initialState)
export default searchSlice.reducer