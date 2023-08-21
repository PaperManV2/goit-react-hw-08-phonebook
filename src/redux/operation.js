import axios from 'axios';
import { fetchContacts } from './contactSlices';

axios.defaults.baseURL = 'https://64d8c6245f9bf5b879ce8b5a.mockapi.io';

export const fetchItems = id => async dispatch => {
  try {
    const response = await axios.get(`/accounts/${id}/contacts`);
    dispatch(fetchContacts(response.data));
  } catch (e) {
    console.error(e);
  }
};
