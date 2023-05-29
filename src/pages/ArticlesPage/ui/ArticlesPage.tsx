import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  return <div className={classNames(cls.articlesPage, {}, [className])}>ARTICLES_PAGE</div>;
};

export default ArticlesPage;
