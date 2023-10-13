import { AsyncThunkAction, DeepPartial, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StoreSchema } from 'app/providers/StoreProvider';
import { ExtraArg } from 'app/providers/StoreProvider/config/StoreSchema';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

export class TestAsyncThunk<Return, Args, RejectedValue> {
  dispatch: Dispatch;
  getState: () => StoreSchema;
  actionCreator: (args: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue; extra: ExtraArg }>;
  api: jest.Mocked<AxiosStatic>;

  constructor(
    actionCreator: (args: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue; extra: ExtraArg }>,
    state?: DeepPartial<StoreSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StoreSchema);
    this.api = mockedAxios;
  }

  callThunk = async (args: Args) => {
    const action = this.actionCreator(args);
    const result = await action(this.dispatch, this.getState, { api: this.api });

    return result;
  };
}
