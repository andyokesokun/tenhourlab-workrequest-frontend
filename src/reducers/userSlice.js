import  {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
   name: 'user',
   initialState:{
        userName: localStorage.getItem("userName") || " ",
   },
   reducers:{
       addUserName: (state, action) => state.userName = action.payload.username  
   }

})

export const {addUserName} =userSlice.actions
export  default userSlice.reducer


