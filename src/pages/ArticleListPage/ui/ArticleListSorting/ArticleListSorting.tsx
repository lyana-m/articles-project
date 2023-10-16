import React from 'react';
import cn from 'classnames';
import cls from './ArticleListSorting.module.scss';
import { Select, SelectOption } from 'shared/ui/Select';
import { SortDirection } from 'shared/types';
import { ArticleListSortOrder } from 'entities/Article';

interface ArticleListSortingProps {
  sort: SortDirection;
  order: ArticleListSortOrder;
  handleSortChange: (sort: SortDirection) => void;
  handleOrderChange: (order: ArticleListSortOrder) => void;
  className?: string;
}

const orderOptions: Array<SelectOption<ArticleListSortOrder>> = [
  { value: 'title', label: 'Название' },
  { value: 'views', label: 'Количество просмотров' },
  { value: 'createdAt', label: 'Дата создания' },
];

const sortOptions: Array<SelectOption<SortDirection>> = [
  { value: 'asc', label: 'По возрастанию' },
  { value: 'desc', label: 'По убыванию' },
];

const ArticleListSorting = (props: ArticleListSortingProps) => {
  const { sort, order, handleSortChange, handleOrderChange, className } = props;

  return (
    <div className={cn(cls.articleListSorting, className)}>
      <Select
        className={cls.select}
        options={orderOptions}
        label="Сортировать по:"
        value={order}
        onChange={handleOrderChange}
      />
      <Select
        className={cls.select}
        options={sortOptions}
        label="Направление сортировки:"
        value={sort}
        onChange={handleSortChange}
      />
    </div>
  );
};

export default ArticleListSorting;
