import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import dashboardReducer from "./dashbordSlice"
import constructionReducer from "./ConstructionSlice"
import constructionAllReducer from "./ConstructionAllSlice"
import constructionTypeRedux from "./ConstructionTypeSlice";


const appStore=configureStore({
    reducer : {
        user: userReducer,
        dashboard: dashboardReducer,
        construction: constructionReducer,
        constructionsAll: constructionAllReducer,
        constructionsType:constructionTypeRedux,
        
    }
})

export default appStore 