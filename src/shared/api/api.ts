import axios from 'axios';
import { USER_LOCALSTORAGE_AUTHDATA } from '@/shared/constants/localStorage';

export const api = axios.create({
  baseURL: __API__,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(USER_LOCALSTORAGE_AUTHDATA) || ''}`;
    return config;
  },
);
