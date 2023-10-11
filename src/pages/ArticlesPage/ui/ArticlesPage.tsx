import React, { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArcticleViewSwitcher, ArticleList } from 'entities/Article';
import cls from './ArticlesPage.module.scss';
import { AsyncReduser, useAsyncReducers } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { articlesActions, articlesReducer, getArticles } from '../model/slice/articlesSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getArticlesLoading, getArticlesView } from '../model/selectors/articlesSelectors';
import { fetchArticles } from '../model/services/fetchArticles';
import { ArticleListView } from 'entities/Article/model/types/article';

interface ArticlesPageProps {
  className?: string;
}

const reducers: AsyncReduser[] = [{ reducerKey: 'articles', reducer: articlesReducer }];

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const articles = useAppSelector(getArticles.selectAll);
  const isLoading = useAppSelector(getArticlesLoading);
  const view = useAppSelector(getArticlesView);

  useAsyncReducers(reducers);

  const handleViewChange = useCallback((view: ArticleListView) => {
    dispatch(articlesActions.setView(view));
  }, [dispatch]);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticles());
      dispatch(articlesActions.init());
    }
  }, [dispatch]);

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      <ArcticleViewSwitcher currentView={view} onViewChange={handleViewChange} />
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default ArticlesPage;
