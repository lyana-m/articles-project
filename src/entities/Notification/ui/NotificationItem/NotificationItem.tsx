import React from 'react';
import cn from 'classnames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import Card from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { getUserAuthData } from '@/entities/User';

interface NotificationItemProps {
  notification?: Notification;
  className?: string;
}

const NotificationItem = (props: NotificationItemProps) => {
  const { notification, className } = props;

  const user = useAppSelector(getUserAuthData);

  if (user?.id !== notification?.userId) {
    return null;
  }

  let content = null;
  if (notification?.href) {
    content = (
      <a href={notification.href} target="_blank" rel="noreferrer">
        <Text title={notification?.title} text={notification?.text} />
      </a>
    );
  } else {
    content = <Text title={notification?.title} text={notification?.text} />;
  }

  return <Card className={cn(cls.notificationItem, className)}>{content}</Card>;
};

export default NotificationItem;
