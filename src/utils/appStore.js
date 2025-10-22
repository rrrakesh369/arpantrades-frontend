import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import dashboardReducer from "./dashbordSlice"
import constructionReducer from "./ConstructionSlice"


const appStore=configureStore({
    reducer : {
        user: userReducer,
        dashboard: dashboardReducer,
        construction: constructionReducer,
    }
})

export default appStore 