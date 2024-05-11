import { configureStore } from "@reduxjs/toolkit";
import profileToggleSlice from "./profileToggleSlice";
import userListSlice from "./userListSlice";
const store = configureStore({
    reducer: {
        profileToggle : profileToggleSlice,
        userList : userListSlice
    }
})

export default store;