import { createSlice } from "@reduxjs/toolkit";

const profileToggleSlice = createSlice({
    name: 'profileToggle',
    initialState:{
        items: []
    },
    reducers: {
        addItem:(state, action) => {
            state.items = []
            state.items.push(action.payload);
        },
        deleteItem:(state) => {
            state.items = []
        }
    }
})

export const {addItem, deleteItem} = profileToggleSlice.actions;
export default profileToggleSlice.reducer;