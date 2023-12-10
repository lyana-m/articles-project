import React, { useCallback, useEffect } from 'react';
import cn from 'classnames';
import cls from './ArticleComments.module.scss';
import { Text } from '@/shared/ui/Text';
import { NewCommentForm } from '@/features/NewCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { getArticleComments } from '../../model/slice/articleCommentSlice';
import { getArticleCommentsLoading } from '../../model/selectors/comments';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { sendArticleNewComment } from '../../services/sendNewArticleComment';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleCommentsProps {
  id: string;
  className?: string;
}

const ArticleComments = (props: ArticleCommentsProps) => {
  const { id, className } = props;

  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getArticleCommentsLoading);

  const dispatch = useAppDispatch();
  const handleNewArticleCommentSend = useCallback(
    (text: string) => {
      dispatch(sendArticleNewComment(text));
    },
    [dispatch]
  );

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && id) {
      dispatch(fetchCommentsByArticleId(id));
    }
  }, [id, dispatch]);

  return (
    <div className={cn(cls.articleComments, className)}>
      <Text className={cls.commentTitle} title="Комментарии" size="size-l" />
      <NewCommentForm className={cls.newComment} onSendNewComment={handleNewArticleCommentSend} />
      <CommentList comments={comments} isLoading={isLoading} />
    </div>
  );
};

export default ArticleComments;
