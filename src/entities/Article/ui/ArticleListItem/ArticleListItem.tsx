import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import cls from './ArticleListItem.module.scss';
import { ArticleItem, ArticleItemTextBlock, ArticleListView } from '../../model/types/article';
import Card from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import ArticleTextBlock from '../ArticleTextBlock/ArticleTextBlock';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface ArticleListItemProps {
  className?: string;
  article?: ArticleItem;
  view: ArticleListView;
}

const ArticleListItem = (props: ArticleListItemProps) => {
  const { article, view, className } = props;

  const createdAt = <Text className={cls.date} text={article?.createdAt} />;
  const type = <Text className={cls.type} text={article?.type.join(', ')} size="size-s" />;
  const views = (
    <>
      <Text className={cls.views} text={String(article?.views)} />
      <EyeIcon />
    </>
  );
  const textBlock = article?.blocks.find((block) => block.type === 'TEXT') as ArticleItemTextBlock;

  const navigate = useNavigate();
  const navigateToArticle = useCallback(() => {
    navigate(`${RoutePath.asticles}/${article?.id || ''}`);
  }, [navigate, article?.id]);

  if (view === 'tile') {
    return (
      <Card className={cn(cls.tile, className)} onClick={navigateToArticle}>
        <div className={cls.imageWrapper}>
          <img className={cls.img} src={article?.img} alt={article?.title} />
          {createdAt}
        </div>
        <div className={cls.infoWrapper}>
          {type}
          {views}
        </div>
        <Text className={cls.title} text={article?.title} />
      </Card>
    );
  }

  return (
    <Card className={cn(cls.list, className)}>
      <div className={cls.header}>
        <Avatar src={article?.user.avatar} size={30} />
        <Text title={article?.user.username} className={cls.username} />
        {createdAt}
      </div>
      <Text className={cls.title} text={article?.title} size="size-l" />
      {type}
      <img src={article?.img} alt={article?.title} className={cls.img} />
      {textBlock ? <ArticleTextBlock block={textBlock} className={cls.text} /> : null}
      <div className={cls.footer}>
        <Button theme="outline" onClick={navigateToArticle}>
          Читать далее...
        </Button>
        {views}
      </div>
    </Card>
  );
};

export default ArticleListItem;
