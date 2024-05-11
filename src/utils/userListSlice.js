import { createSlice } from "@reduxjs/toolkit";
import { users } from "../constant";
const userListSlice = createSlice({
    name: 'userList',
    initialState:{
        items: users
    },
    reducers: {
        searchItem:(state, action) => {
            if(action.payload.length == 0)
                state.items = users
            else{
                state.items = state.items.filter((data) => {
                    return data.name.toLowerCase().includes(action.payload.toLowerCase())
                })
            }
        },
        
    }
})

export const {searchItem} = userListSlice.actions;
export default userListSlice.reducer;