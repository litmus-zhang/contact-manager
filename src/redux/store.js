import { configureStore} from "@reduxjs/toolkit";
import contactReducer from "./contact/ContactSlice"


const store = configureStore({
    reducer: {
        contacts: contactReducer,
    }
}
)


export default store;