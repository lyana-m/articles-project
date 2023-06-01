import React from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Article } from 'entities/Article';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
  className?: string;
}

const ArticlePage = (props: ArticlePageProps) => {
  const { className } = props;

  const { id } = useParams();

  if (!id) {
    return <Text title="Статья не найдена" />;
  }

  return (
    <div className={classNames(cls.articlePage, {}, [className])}>
      <Article id={id} />
    </div>
  );
};

export default ArticlePage;
