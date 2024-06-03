import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialContacts } from '../contacts';



const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: initialContacts },
  reducers: {
      addContact: {reducer (state, action) {
          state.items.push(action.payload);
      }, prepare(newContact) {
        return {
          payload: {
            id: nanoid(),
            ...newContact,
          },
        };
      }},
      deleteContact: (state, action) => {
           state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = state => state.contacts.items;

export default contactsSlice.reducer;


