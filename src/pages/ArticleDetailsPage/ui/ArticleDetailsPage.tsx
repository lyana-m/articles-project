import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;

  return <div className={classNames(cls.articleDetailsPage, {}, [className])}>ARTICLE_DETAILS_PAGE</div>;
};

export default ArticleDetailsPage;
