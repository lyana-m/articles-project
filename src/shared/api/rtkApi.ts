import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCALSTORAGE_AUTHDATA } from 'shared/constants/localStorage';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_AUTHDATA);

      if (token) {
        headers.set('Authorization', token);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
