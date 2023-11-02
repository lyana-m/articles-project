import cls from './ArticleListItem.module.scss';
import { ArticleListView } from '../../model/types/article';
import Card from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton';

interface ArticleListItemSkeletonProps {
  view: ArticleListView;
}

const ArticleListItemSkeleton = ({ view }: ArticleListItemSkeletonProps) => {
  if (view === 'tile') {
    return (
      <Card className={cls.tile}>
        <div className={cls.imageWrapper}>
          <Skeleton className={cls.img} width={200} height={200} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton className={cls.type} width={100} height={16} />
          <Skeleton className={cls.views} width={50} height={16} />
        </div>
        <Skeleton className={cls.title} width={150} height={16} />
      </Card>
    );
  }

  return (
    <Card className={cls.list}>
      <div className={cls.header}>
        <Skeleton width={30} height={30} borderRadius="50%" />
        <Skeleton width={150} height={16} className={cls.username} />
      </div>
      <Skeleton className={cls.title} width={300} height={16} />
      <Skeleton className={cls.img} height={200} />
      <Skeleton className={cls.text} height={40} />
      <div className={cls.footer}>
        <Skeleton width={100} height={24} />
      </div>
    </Card>
  );
};

export default ArticleListItemSkeleton;
