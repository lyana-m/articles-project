import { ArticleListSchema } from '../types/acticleListSchema';

export const initialState: ArticleListSchema = {
  isLoading: false,
  error: undefined,
  view: 'list',
  page: 1,
  hasMore: true,
  limit: 8,
  ids: [],
  entities: {},
  _inited: false,
  sort: 'asc',
  order: 'title',
  search: '',
  type: 'ALL',
};
