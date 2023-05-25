import { Country } from '../../../Country';
import { Currency } from '../../../Currency';
import { ValidationErrors } from './validationErrors';

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  formData?: Profile;
  isLoading: boolean;
  error: string;
  readonly: boolean;
  validationErrors?: ValidationErrors[];
}
