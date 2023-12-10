import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../types/notification';

const extendedApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    notificationList: build.query<Notification[], undefined>({
      query: () => ({ url: '/notifications' }),
    }),
  }),
  overrideExisting: false,
});

export const { useNotificationListQuery } = extendedApi;
