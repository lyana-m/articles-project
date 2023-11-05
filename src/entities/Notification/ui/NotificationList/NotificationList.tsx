import React from 'react';
import cn from 'classnames';
import cls from './NotificationList.module.scss';
import { useNotificationListQuery } from '../../model/api/notificationApi';
import { Skeleton } from 'shared/ui/Skeleton';
import NotificationItem from '../NotificationItem/NotificationItem';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

interface NotificationListProps {
  className?: string;
}

const NotificationList = (props: NotificationListProps) => {
  const { className } = props;

  const { data: notifications, isLoading, isError } = useNotificationListQuery(undefined, { pollingInterval: 10000 });

  if (isLoading) {
    return (
      <VStack gap="16" className={cn(cls.notificationList, cls.skeleton, className)}>
        <Skeleton width="100%" height="60px" borderRadius="8px" />
        <Skeleton width="100%" height="60px" borderRadius="8px" />
        <Skeleton width="100%" height="60px" borderRadius="8px" />
      </VStack>
    );
  }

  if (isError || !notifications?.length) {
    return <Text title='Уведомления отсутствуют' />;
  }

  return (
    <VStack gap="8" className={cn(cls.notificationList, className)}>
      {notifications?.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </VStack>
  );
};

export default NotificationList;
