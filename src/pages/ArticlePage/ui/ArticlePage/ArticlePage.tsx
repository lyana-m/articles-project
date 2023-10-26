import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { Article } from 'entities/Article';
import cls from './ArticlePage.module.scss';
import { useAsyncReducers, AsyncReduser } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { articleCommentsReducer } from '../../model/slice/articleCommentSlice';
import { Page } from 'widgets/Page';
import { articleRecommendationsReducer } from '../../model/slice/articleRecommendationsSlice';
import { ArticleRecommendationList } from 'features/ArticleRecommendationList';
import ArticleComments from '../ArticleComments/ArticleComments';

const reducers: AsyncReduser[] = [
  { reducerKey: 'articleComments', reducer: articleCommentsReducer },
  { reducerKey: 'articleRecommendations', reducer: articleRecommendationsReducer },
];

const ArticlePage = () => {
  const { id } = useParams();

  useAsyncReducers(reducers);

  if (!id) {
    return <Text title="Статья не найдена" />;
  }

  return (
    <Page className={cls.articlePage}>
      <Article id={id} />
      <ArticleRecommendationList className={cls.recommendations} />
      <ArticleComments id={id} />
    </Page>
  );
};

export default ArticlePage;
