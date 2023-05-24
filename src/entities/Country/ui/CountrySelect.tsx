import React, { useCallback } from 'react';
import { Select } from 'shared/ui/Select';
import { Country, countryOptions } from '../model/types/country';

interface CountrySelectProps {
  readonly?: boolean;
  value?: Country;
  className?: string;
  onChange?: (value: Country) => void;
}

const CountrySelect = (props: CountrySelectProps) => {
  const { value, readonly, className, onChange } = props;

  const handleChange = useCallback(
    (value: string) => {
      if (onChange) {
        onChange(value as Country);
      }
    },
    [onChange]
  );

  return (
    <Select
      onChange={handleChange}
      value={value}
      label="Страна"
      options={countryOptions}
      readonly={readonly}
      className={className}
    />
  );
};

export default CountrySelect;
