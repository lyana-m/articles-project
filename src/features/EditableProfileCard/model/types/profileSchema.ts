import { Profile } from '@/entities/Profile';
import { ValidationErrors } from './validationErrors';

export interface ProfileSchema {
  data?: Profile;
  formData?: Profile;
  isLoading: boolean;
  error: string;
  readonly: boolean;
  validationErrors?: ValidationErrors[];
}
