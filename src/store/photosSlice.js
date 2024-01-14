import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "./api";
import axios from "axios";
// import { id } from "./action";
// import { handleFetch } from "./action";

export const handleFetch = createAsyncThunk("fetchphotos/get", async (args, { rejectWithValue }) => {


    try {
        const apiHeader = {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: "563492ad6f91700001000001a17e4339930f47a1bd94f472e2cf50b4"
            }
        }


        let { data: natureData } = await axios.get(`${BASE_URL}search?query=nature`, apiHeader)

        let { data: birdsData } = await axios.get(`${BASE_URL}search?query=birds`, apiHeader)
        let { data: universeData } = await axios.get(`${BASE_URL}search?query=universe`, apiHeader)

        let { data: abstractData } = await axios.get(`${BASE_URL}search?query=abstract`, apiHeader)

        // console.log(natureData);
        return { natureData, birdsData, universeData, abstractData }

    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
        // throw new Error(error)
    }
})

export const photoSlice = createSlice({
    name: "photos",
    initialState: {
        data: {
            nature: [],
            birds: [],
            universe: [],
            abstract: []
        },
        isLoading: false,
        error: null

    }

    , extraReducers: (builder) => {
        builder
            .addCase(handleFetch.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(handleFetch.fulfilled, (state, action) => {
                // console.log("nature", action.payload.natureData);
                state.isLoading = false
                state.data.nature = action.payload.natureData
                state.data.birds = action.payload.birdsData
                state.data.universe = action.payload.universeData
                state.data.abstract = action.payload.abstractData

                // state.data.details = action.payload.detailsData



            })
    }
    ,
    // extraReducers: {
    //     [handleFetch.pending]: (state,action) => {
    //         state.isLoading = true;
    //     },
    //     [handleFetch.fulfilled]: (state, action) => {
    //         state.isLoading = false;
    //         state.data.nature = action.payload.natureData
    //         state.data.birds = action.payload.birdsData
    //         state.data.universe = action.payload.universeData
    //         state.data.abstract = action.payload.abstractData
    //     },
    //     [handleFetch.rejected]: (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.payload.message;
    //     },
    // }
})




export default photoSlice.reducer