import React from 'react';
import { Text } from 'shared/ui/Text';
import { ArticleList } from 'entities/Article';
import cls from './ArticleRecommendationList.module.scss';
import { useArticleRecommendationListQuery } from '../../api/recommendationsApi';

interface ArticleRecommendationListProps {
  className?: string;
}

const ArticleRecommendationList = (props: ArticleRecommendationListProps) => {
  const { className } = props;

  const { data: recommendations, isLoading: isRecommendationsLoading, isError } = useArticleRecommendationListQuery(4);

  if (isError) {
    return null;
  }

  return (
    <div className={className}>
      <Text className={cls.title} title="Рекомендуем" size="size-l" />
      <ArticleList
        className={cls.recommendations}
        articles={recommendations}
        isLoading={isRecommendationsLoading}
        key="recommendations"
        target="_blank"
      />
    </div>
  );
};

export default ArticleRecommendationList;
