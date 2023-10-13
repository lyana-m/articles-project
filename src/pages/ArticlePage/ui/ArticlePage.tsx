import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { Article } from 'entities/Article';
import cls from './ArticlePage.module.scss';
import { CommentList } from 'entities/Comment';
import { useAsyncReducers, AsyncReduser } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { getArticleComments, articleCommentsReducer } from '../model/slice/articleCommentSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsLoading } from '../model/selectors/comments';
import { NewCommentForm } from 'features/NewCommentForm';
import { sendArticleNewComment } from '../services/sendNewArticleComment';
import { Page } from 'shared/ui/Page';

const reducers: AsyncReduser[] = [{ reducerKey: 'articleComments', reducer: articleCommentsReducer }];

const ArticlePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getArticleCommentsLoading);

  useAsyncReducers(reducers);

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

  if (!id) {
    return <Text title="Статья не найдена" />;
  }

  return (
    <Page className={cls.articlePage}>
      <Article id={id} />
      <Text className={cls.commentTitle} title="Комментарии" size="size-l" />
      <NewCommentForm className={cls.newComment} onSendNewComment={handleNewArticleCommentSend} />
      <CommentList comments={comments} isLoading={isLoading} />
    </Page>
  );
};

export default ArticlePage;
