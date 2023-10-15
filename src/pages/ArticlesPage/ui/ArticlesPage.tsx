import React, { useCallback, useEffect } from 'react';
import { ArcticleViewSwitcher, ArticleList } from 'entities/Article';
import cls from './ArticlesPage.module.scss';
import { AsyncReduser, useAsyncReducers } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { articlesActions, articlesReducer, getArticles } from '../model/slice/articlesSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getArticlesLoading, getArticlesView } from '../model/selectors/articlesSelectors';
import { ArticleListView } from 'entities/Article/model/types/article';
import { Page } from 'widgets/Page';
import { fetchMoreArticles } from '../model/services/fetchMoreArticles/fetchMoreArticles';
import { initArticles } from '../model/services/initArticles/initArticles';

const reducers: AsyncReduser[] = [{ reducerKey: 'articles', reducer: articlesReducer }];

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(getArticles.selectAll);
  const isLoading = useAppSelector(getArticlesLoading);
  const view = useAppSelector(getArticlesView);

  useAsyncReducers(reducers, false);

  const handleViewChange = useCallback(
    (view: ArticleListView) => {
      dispatch(articlesActions.setView(view));
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
    <Page className={cls.articlesPage} onScrollEnd={loadMoreData}>
      <ArcticleViewSwitcher currentView={view} onViewChange={handleViewChange} />
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </Page>
  );
};

export default ArticlesPage;
