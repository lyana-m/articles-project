export { default as Article } from './ui/Article/Article';
export { ArticleSchema } from './model/types/articleSchema';
export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';
export { articleReducer, articleActions } from './model/slice/articleSlice';
export { getArticleData, getArticleLoading, getArticleError } from './model/selectors/arcticleSelectors';
