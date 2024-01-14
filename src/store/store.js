import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "./photosSlice";
import detailsSclice from "./detailsSclice";
import searchSlice from "./searchSlice";
import videosSlice from "./videosSlice";


const store = configureStore({
    reducer: {
        photos: photoSlice,
        details: detailsSclice,
        search: searchSlice,
        videos: videosSlice
    }
    ,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export default store;