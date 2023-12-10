import React from 'react';
import cn from 'classnames';
import cls from './ArticleTextBlock.module.scss';
import { ArticleItemTextBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/Text';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleItemTextBlock;
}

const ArticleTextBlock = (props: ArticleTextBlockProps) => {
  const {
    block: { title, paragraphs },
    className,
  } = props;

  return (
    <div className={cn(cls.articleTextBlock, className)}>
      {title ? <Text title={title} className={cls.title} /> : null}
      {paragraphs.map((paragraph) => (
        <Text text={paragraph} key={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
};

export default ArticleTextBlock;
