import React, { useCallback } from 'react';
import { Country, countryOptions } from '../model/types/country';
import { ListBox } from 'shared/ui/ListBox';

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
    <ListBox
      onChange={handleChange}
      value={value}
      label="Страна"
      options={countryOptions}
      readonly={readonly}
      className={className}
      position="top"
    />
  );
};

export default CountrySelect;
