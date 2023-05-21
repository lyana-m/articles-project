import { Country, Currency } from 'shared/constants/common';

export interface Profile {
  firstname: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile | null;
  isLoading: boolean;
  error: string;
  readonly: boolean;
}
