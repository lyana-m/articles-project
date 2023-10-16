export const getSearchParamString = (params: Record<string, string>) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    }
  });

  return `?${searchParams.toString()}`;
};

export const addSearchParams = (params: Record<string, string>) => {
  window.history.pushState('', '', getSearchParamString(params));
};
