import React, { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from 'entities/Article';
import { AsyncReduser, useAsyncReducers } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { articleListReducer, getArticles } from '../../model/slice/articleListSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getArticleListLoading, getArticleListView } from '../../model/selectors/articleListSelectors';
import { Page } from 'widgets/Page';
import { fetchMoreArticles } from '../../model/services/fetchMoreArticles/fetchMoreArticles';
import { initArticles } from '../../model/services/initArticles/initArticles';
import ArticleListFilters from '../ArticleListFilters/ArticleListFilters';

const reducers: AsyncReduser[] = [{ reducerKey: 'articleList', reducer: articleListReducer }];

const ArticleListPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const articles = useAppSelector(getArticles.selectAll);
  const isLoading = useAppSelector(getArticleListLoading);
  const view = useAppSelector(getArticleListView);

  useAsyncReducers(reducers, false);

  const loadMoreData = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchMoreArticles());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticles(searchParams));
  }, [dispatch, searchParams]);

  return (
    <Page onScrollEnd={loadMoreData}>
      <ArticleListFilters />
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </Page>
  );
};

export default ArticleListPage;
