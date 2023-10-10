import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import cls from './ArticlesPage.module.scss';
import { AsyncReduser, useAsyncReducers } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { articlesReducer, getArticles } from '../model/slice/articlesSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getArticlesLoading, getArticlesView } from '../model/selectors/articlesSelectors';
import { fetchArticles } from '../model/services/fetchArticles';

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

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticles());
    }
  }, [dispatch]);

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default ArticlesPage;
