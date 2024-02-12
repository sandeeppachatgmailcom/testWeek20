import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        user: []
    },
    reducers:{
        logginuser: (state, ) => {
           
          
            state.user.push('action.payload');
        },
        loggoutUser: (state, ) => {
            state.user = [];
        }
    }
})

export const { logginuser, loggoutUser } = userSlice.actions;
export default userSlice.reducer;