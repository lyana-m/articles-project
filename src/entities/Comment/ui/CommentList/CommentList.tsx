import React from 'react';
import { Comment } from '../../model/types/comment';
import CommentItem from '../CommentItem/CommentItem';
import { Text } from 'shared/ui/Text';

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading: boolean;
}

const CommentList = (props: CommentListProps) => {
  const { comments, isLoading, className } = props;

  if (isLoading) {
    return <div className={className}>
      <CommentItem isLoading />
      <CommentItem isLoading />
      <CommentItem isLoading />
    </div>;
  }

  return (
    <div className={className}>
      {comments.length ? (
        comments.map((comment) => <CommentItem key={comment.id} comment={comment} isLoading={isLoading} />)
      ) : (
        <Text title="Пока нет комментариев" />
      )}
    </div>
  );
};

export default CommentList;
