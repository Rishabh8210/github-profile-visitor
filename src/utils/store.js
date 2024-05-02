import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        profileToggle : profileToggleSlice
    }
})