import React, { HTMLAttributeAnchorTarget } from 'react';
import cn from 'classnames';
import cls from './ArticleListItem.module.scss';
import { ArticleItem, ArticleItemTextBlock, ArticleListView } from '../../model/types/article';
import Card from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import ArticleTextBlock from '../ArticleTextBlock/ArticleTextBlock';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import AppLink from '@/shared/ui/AppLink/AppLink';

interface ArticleListItemProps {
  className?: string;
  article?: ArticleItem;
  view: ArticleListView;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItem = (props: ArticleListItemProps) => {
  const { article, view, className, target = '_self' } = props;

  const createdAt = <Text className={cls.date} text={article?.createdAt} />;
  const type = <Text className={cls.type} text={article?.type.join(', ')} size="size-s" />;
  const views = (
    <>
      <Text className={cls.views} text={String(article?.views)} />
      <EyeIcon />
    </>
  );
  const textBlock = article?.blocks.find((block) => block.type === 'TEXT') as ArticleItemTextBlock;

  const route = `${RoutePath.asticles}/${article?.id || ''}`;

  if (view === 'tile') {
    return (
      <AppLink to={route} target={target}>
        <Card className={cn(cls.tile, className)}>
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
      </AppLink>
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
        <AppLink to={route} target={target}>
          <Button theme="outline">Читать далее...</Button>
        </AppLink>
        {views}
      </div>
    </Card>
  );
};

export default ArticleListItem;
