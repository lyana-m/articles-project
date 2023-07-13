import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentItem.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import AppLink from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CommentItemProps {
  className?: string;
  comment?: Comment;
  isLoading: boolean;
}

const CommentItem = (props: CommentItemProps) => {
  const { comment, isLoading, className } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.commentItem, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={40} height={40} borderRadius="50%" />
          <Skeleton className={cls.username} width={300} height={24} />
        </div>
        <Skeleton className={cls.comment} width="100%" height={40} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <AppLink to={`${RoutePath.profile}/${comment.user.id}`} className={classNames(cls.commentItem, {}, [className])}>
      <div className={cls.header}>
        <Avatar size={40} src={comment.user.avatar} />
        <Text className={cls.username} title={comment.user.username} />
      </div>
      <Text className={cls.comment} text={comment.text} />
    </AppLink>
  );
};

export default CommentItem;
