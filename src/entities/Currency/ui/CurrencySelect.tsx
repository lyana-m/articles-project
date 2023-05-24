import React, { useCallback } from 'react';
import { Select } from 'shared/ui/Select';
import { Currency, currencyOptions } from '../model/types/currency';

interface CurrencySelectProps {
  readonly?: boolean;
  value?: Currency;
  className?: string;
  onChange?: (value: Currency) => void;
}

const CurrencySelect = (props: CurrencySelectProps) => {
  const { value, readonly, className, onChange } = props;

  const handleChange = useCallback(
    (value: string) => {
      if (onChange) {
        onChange(value as Currency);
      }
    },
    [onChange]
  );

  return (
    <Select
      onChange={handleChange}
      value={value}
      label="Валюта"
      options={currencyOptions}
      readonly={readonly}
      className={className}
    />
  );
};

export default CurrencySelect;
