import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StoreSchema } from 'app/providers/StoreProvider';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

export class TestAsyncThunk<Return, Args, RejectedValue> {
  dispatch: Dispatch;
  getState: () => StoreSchema;
  actionCreator: (args: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>;
  api: jest.Mocked<AxiosStatic>;

  constructor(
    actionCreator: (args: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;
  }

  callThunk = async (args: Args) => {
    const action = this.actionCreator(args);
    const result = await action(this.dispatch, this.getState, { api: this.api });

    return result;
  };
}
