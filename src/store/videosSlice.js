import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_VIDEO_URL } from "./api";
import axios from "axios";
// import { id } from "./action";
// import { handleFetch } from "./action";



export const videosSlice = createSlice({
   name: "videos",
   initialState: {
      data: {
         vid: [],
      }

   }

   , extraReducers: (builder) => {
      builder.addCase(handleVideos.fulfilled, (state, action) => {
         state.data.vid = action.payload.videosData

      })
   }

})


export const handleVideos = createAsyncThunk("handleVideos/get", async ({ query, orientation, size }, thunkAPI) => {


   try {



      let { data: videosData } = await axios.get(`${BASE_VIDEO_URL}&q=${query}&safesearch=true`)




      // console.log(videosData);
      return { videosData }

   } catch (error) {
      console.log(error.message);
      // throw new Error(error)
   }
})


export default videosSlice.reducer