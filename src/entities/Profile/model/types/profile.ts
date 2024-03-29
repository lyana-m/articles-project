import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

export interface Profile {
  id?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
