import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlock.module.scss';
import { ArticleItemImageBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleItemImageBlock;
}

const ArticleImageBlock = (props: ArticleImageBlockProps) => {
  const {
    block: { src, title },
    className,
  } = props;

  return (
    <div className={classNames(cls.articleImageBlock, {}, [className])}>
      <img src={src} alt={title} />
      {title ? <Text title={title} size="size-s" align="center" /> : null}
    </div>
  );
};

export default ArticleImageBlock;