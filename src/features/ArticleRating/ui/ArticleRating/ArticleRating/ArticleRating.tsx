import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useArticleRaitingQuery } from '@/features/ArticleRating/api/articleRaitingApi';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleRatingProps {
  articleId: string;
  className?: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
  const { articleId, className } = props;

  const userData = useAppSelector(getUserAuthData);

  const { data, isLoading } = useArticleRaitingQuery({ articleId, userId: userData?.id || '' });

  if (isLoading) {
    return <Skeleton width="100%" height="120px" />;
  }

  const rateData = data?.[0];

  return <RatingCard title="Как вам статья?" rate={rateData?.rate} className={className} />;
};

export default ArticleRating;
