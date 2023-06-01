import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
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
    <div className={classNames(cls.articleCodeBlock, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
};

export default ArticleCodeBlock;
