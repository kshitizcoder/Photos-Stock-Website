import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "./api";
import axios from "axios";
import { useState } from "react";

export const handleDetailsFetch = createAsyncThunk("fetchdetails/get", async (id, { rejectWithValue }) => {

    try {


        const apiHeader = {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: "563492ad6f91700001000001a17e4339930f47a1bd94f472e2cf50b4"
            }
        }
        const { data: photoDetails } = await axios.get(`${BASE_URL}photos/${id}`, apiHeader)

        return { photoDetails }
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }

    // throw new Error(error)

})



export const detailsSlice = createSlice({
    name: "details",
    initialState: {
        data: {
            photoDetails: [],
            flower: []
        },
        isLoading: false,
        isError: false

    }


    ,
    // extraReducers: (builder) => {
    //     builder.addCase(handleDetailsFetch.fulfilled, (state, action) => {

    //         state.data.photoDetails = action.payload.photoDetails



    //     })
    // }
    extraReducers: {
        [handleDetailsFetch.pending]: (state) => {
            state.isLoading = true;
        },
        [handleDetailsFetch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data.photoDetails = action.payload.photoDetails
        },
        [handleDetailsFetch.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
        },
    }

})





export default detailsSlice.reducer