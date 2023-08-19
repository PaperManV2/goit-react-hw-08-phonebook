import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    accountId: '',
  },

  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, phone) {
        return {
          payload: {
            id: nanoid(),
            name,
            phone,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const updatedlist = state.items.filter(
          contact => contact.id !== action.payload
        );
        state.items = updatedlist;
      },
      prepare(id) {
        return {
          payload: id,
        };
      },
    },
    fetchContacts(state, action) {
      state.items = action.payload;
    },
    setAccountId(state, action) {
      state.accountId = action.payload;
    },
  },
});

export const { addContact, deleteContact, fetchContacts, setAccountId } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
