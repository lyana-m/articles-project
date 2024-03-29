import { fetchMoreArticles } from './fetchMoreArticles';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticles } from '../fetchArticles/fetchArticles';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchMoreArticles', () => {
  const articles = {
    view: 'list' as const,
    isLoading: false,
    ids: [],
    entities: {},
    hasMore: true,
    page: 2,
    _inited: true,
    limit: 8,
    order: 'createdAt' as const,
    sort: 'asc' as const,
    search: '',
    type: 'ALL' as const,
  };

  it('should load data and update page', async () => {
    const thunk = new TestAsyncThunk(fetchMoreArticles, { articleList: articles });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({ });
  });

  it('should not load data while is loading', async () => {
    const thunk = new TestAsyncThunk(fetchMoreArticles, {
      articleList: { ...articles, isLoading: true },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalledWith();
  });

  it('should not load data if hasMore is false', async () => {
    const thunk = new TestAsyncThunk(fetchMoreArticles, {
      articleList: { ...articles, hasMore: false },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalledWith();
  });
});
