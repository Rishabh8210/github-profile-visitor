import { configureStore } from "@reduxjs/toolkit";
import profileToggleSlice from "./profileToggleSlice";
const store = configureStore({
    reducer: {
        profileToggle : profileToggleSlice
    }
})

export default store;