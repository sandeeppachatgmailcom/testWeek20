import { configureStore } from "@reduxjs/toolkit"
import userSplice from "./userSlice"


 const appStore = configureStore({
    reducer:{
        user:userSplice
    }
 })

 


export default appStore;
