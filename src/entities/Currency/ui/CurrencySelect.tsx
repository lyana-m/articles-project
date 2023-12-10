import React, { useCallback } from 'react';
import { Currency, currencyOptions } from '../model/types/currency';
import { ListBox } from '@/shared/ui/Popups';

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
    <ListBox
      onChange={handleChange}
      value={value}
      label="Валюта"
      options={currencyOptions}
      readonly={readonly}
      className={className}
      position="top-left"
    />
  );
};

export default CurrencySelect;
