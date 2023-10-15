import React from 'react';
import cn from 'classnames';
import cls from './ArticleCodeBlock.module.scss';
import { ArticleItemCodeBlock } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleItemCodeBlock;
}

const ArticleCodeBlock = (props: ArticleCodeBlockProps) => {
  const { block, className } = props;

  return (
    <div className={cn(cls.articleCodeBlock, className)}>
      <Code text={block.code} />
    </div>
  );
};

export default ArticleCodeBlock;
