import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider';

export class TestAsyncThunk<Return, Args, RejectedValue> {
  dispatch: Dispatch;
  getState: () => StoreSchema;
  actionCreator: (args: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>;

  constructor(actionCreator: (args: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  callThunk = async (args: Args) => {
    const action = this.actionCreator(args);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  };
}
