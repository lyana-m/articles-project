import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../model/slice/counterSlice';
import { Button } from 'shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
  const count = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={onIncrement}>+</Button>
      <Button onClick={onDecrement}>-</Button>
    </div>
  );
};

export default Counter;
