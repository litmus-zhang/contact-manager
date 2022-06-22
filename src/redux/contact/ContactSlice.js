import { ADD_CONTACT } from "./actionTypes"

const initialState = {
    allContacts : []
}


const contactReducer = (state=initialState, action) =>
{
    switch (action.type)
    {
        case ADD_CONTACT:

        
        default:
            return state
    }
}