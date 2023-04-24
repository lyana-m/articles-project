import counterReducer, { increment, decrement } from './counterSlice';

describe('counterReducer', () => {
  it('should increment value', () => {
    const state = {
      value: 10,
    };

    expect(counterReducer(state, increment)).toEqual({ value: 11 });
  });

  it('should decrement value', () => {
    const state = {
      value: 10,
    };

    expect(counterReducer(state, decrement)).toEqual({ value: 9 });
  });

  it('should work with empty state', () => {
    expect(counterReducer(undefined, increment)).toEqual({ value: 1 });
  });
});
