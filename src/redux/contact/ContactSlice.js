import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: []
}


const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        deleteAllContacts: (state) =>
        {
            state.contacts = []
        },
        addContact: (state, action) =>
        {
            const newContact = action.payload;
            state.contacts = state.contacts.push(newContact)
        }
    }
})

export const {deleteAllContacts, addContact} = contactSlice.actions

export default contactSlice.reducer