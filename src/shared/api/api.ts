import axios from 'axios';
import { USER_LOCALSTORAGE_AUTHDATA } from 'shared/constants/localStorage';

export const api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_AUTHDATA),
    'Content-Type': 'application/json',
  },
});
