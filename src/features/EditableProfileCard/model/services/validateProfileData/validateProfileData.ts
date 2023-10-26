import { Profile } from 'entities/Profile';
import { ValidationErrors } from '../../types/validationErrors';

export const validateProfileData = (profile?: Profile) => {
  const errors: ValidationErrors[] = [];

  if (!profile) {
    errors.push(ValidationErrors.NO_DATA);
  }

  if (!profile?.firstname) {
    errors.push(ValidationErrors.ICRORRECT_FIRSTNAME);
  }

  if (!profile?.lastname) {
    errors.push(ValidationErrors.ICRORRECT_LASTTNAME);
  }

  if (!profile?.age || !Number.isInteger(profile.age) || profile?.age < 0) {
    errors.push(ValidationErrors.ICRORRECT_AGE);
  }

  return errors;
};
