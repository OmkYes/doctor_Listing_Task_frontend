import { configureStore } from "@reduxjs/toolkit";
import { docterApi } from '../redux/api/docter'


const reduxStore = configureStore({
    reducer: {
        [docterApi.reducerPath]: docterApi.reducer,
    },
    middleware: def => [...def(), docterApi.middleware]
})

export default reduxStore