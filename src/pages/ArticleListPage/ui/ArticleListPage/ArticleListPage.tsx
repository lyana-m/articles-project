import React, { useCallback, useEffect } from 'react';
import { ArcticleViewSwitcher, ArticleList } from 'entities/Article';
import cls from './ArticleListPage.module.scss';
import { AsyncReduser, useAsyncReducers } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { articleListActions, articleListReducer, getArticles } from '../../model/slice/articleListSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getArticleListLoading, getArticleListView } from '../../model/selectors/articleListSelectors';
import { ArticleListView } from 'entities/Article/model/types/article';
import { Page } from 'widgets/Page';
import { fetchMoreArticles } from '../../model/services/fetchMoreArticles/fetchMoreArticles';
import { initArticles } from '../../model/services/initArticles/initArticles';

const reducers: AsyncReduser[] = [{ reducerKey: 'articleList', reducer: articleListReducer }];

const ArticleListPage = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(getArticles.selectAll);
  const isLoading = useAppSelector(getArticleListLoading);
  const view = useAppSelector(getArticleListView);

  useAsyncReducers(reducers, false);

  const handleViewChange = useCallback(
    (view: ArticleListView) => {
      dispatch(articleListActions.setView(view));
    },
    [dispatch]
  );

  const loadMoreData = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchMoreArticles());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticles());
  }, [dispatch]);

  return (
    <Page className={cls.articleListPage} onScrollEnd={loadMoreData}>
      <ArcticleViewSwitcher currentView={view} onViewChange={handleViewChange} />
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </Page>
  );
};

export default ArticleListPage;
