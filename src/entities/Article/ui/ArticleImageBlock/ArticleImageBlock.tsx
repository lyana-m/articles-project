import React from 'react';
import cn from 'classnames';
import cls from './ArticleImageBlock.module.scss';
import { ArticleItemImageBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/Text';

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
    <div className={cn(cls.articleImageBlock, className)}>
      <img src={src} alt={title} />
      {title ? <Text title={title} size="size-s" align="center" /> : null}
    </div>
  );
};

export default ArticleImageBlock;
