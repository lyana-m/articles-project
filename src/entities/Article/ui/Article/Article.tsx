import React, { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { AsyncReduser, useAsyncReducers } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { getArticleData, getArticleError, getArticleLoading } from '../../model/selectors/arcticleSelectors';
import { articleReducer } from '../../model/slice/articleSlice';
import cls from './Article.module.scss';
import { Avatar } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { ArticleItemBlock } from '../../model/types/article';
import ArticleTextBlock from '../ArticleTextBlock/ArticleTextBlock';
import ArticleCodeBlock from '../ArticleCodeBlock/ArticleCodeBlock';
import ArticleImageBlock from '../ArticleImageBlock/ArticleImageBlock';

interface ArticleProps {
  className?: string;
  id: string;
}

const reducers: AsyncReduser[] = [{ reducerKey: 'article', reducer: articleReducer }];

const Article = (props: ArticleProps) => {
  const { id, className } = props;

  const dispatch = useAppDispatch();

  const article = useAppSelector(getArticleData);
  const articleLoading = useAppSelector(getArticleLoading);
  const articleError = useAppSelector(getArticleError);

  const renderArticleBlock = useCallback((block: ArticleItemBlock) => {
    switch (block.type) {
      case 'TEXT':
        return <ArticleTextBlock key={block.id} block={block} className={cls.block} />;
      case 'CODE':
        return <ArticleCodeBlock key={block.id} block={block} className={cls.block} />;
      case 'IMAGE':
        return <ArticleImageBlock key={block.id} block={block} className={cls.block} />;
      default:
        return null;
    }
  }, []);

  let content;
  if (articleLoading) {
    content = (
      <div>
        <Skeleton width={200} height={200} borderRadius="50%" className={cls.avatar} />
        <Skeleton width={300} height={40} className={cls.title} />
        <Skeleton width={600} height={40} className={cls.skeleton} />
        <Skeleton width="100%" height={120} className={cls.skeleton} />
        <Skeleton width="100%" height={120} className={cls.skeleton} />
      </div>
    );
  } else if (articleError) {
    content = <Text title="Произошла ошибка при загрузке статьи" theme="error" align="center" />;
  } else {
    content = (
      <div>
        <div>
          <Avatar src={article?.img} size={200} className={cls.avatar} />
        </div>
        <Text title={article?.title} text={article?.subtitle} size="size-l" className={cls.title} />
        <div className={cls.info}>
          <div className={cls.info__item}>
            <EyeIcon />
            <Text text={String(article?.views)} />
          </div>
          <div className={cls.info__item}>
            <CalendarIcon />
            <Text text={article?.createdAt} />
          </div>
        </div>
        {article?.blocks.map(renderArticleBlock)}
      </div>
    );
  }

  useAsyncReducers(reducers);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  return <div className={classNames(cls.article, {}, [className])}>{content}</div>;
};

export default Article;
