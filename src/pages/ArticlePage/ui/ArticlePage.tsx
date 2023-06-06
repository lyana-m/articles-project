import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
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

const reducers: AsyncReduser[] = [{ reducerKey: 'articleComments', reducer: articleCommentsReducer }];

const ArticlePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getArticleCommentsLoading);

  useAsyncReducers(reducers);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && id) {
      dispatch(fetchCommentsByArticleId(id));
    }
  }, [id, dispatch]);

  if (!id) {
    return <Text title="Статья не найдена" />;
  }

  return (
    <div className={classNames(cls.articlePage)}>
      <Article id={id} />
      <Text className={cls.commentTitle} title="Комментарии" size="size-l" />
      <CommentList
        // comments={[
        //   {
        //     id: '1',
        //     user: {
        //       id: '1',
        //       login: 'Vanya',
        //       avatar: 'https://datarundown.com/wp-content/uploads/2022/03/Datarundown-Admin-Avatar-Circle-1.png',
        //     },
        //     text: 'comment 1',
        //   },
        //   {
        //     id: '2',
        //     user: { id: '2', login: 'Masha' },
        //     text: 'comment 2',
        //   },
        // ]}
        comments={comments}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ArticlePage;
