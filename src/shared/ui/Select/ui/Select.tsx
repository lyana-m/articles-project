import React, { ChangeEvent, useMemo } from 'react';
import cn from 'classnames';
import cls from './Select.module.scss';

interface SelectOptions {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOptions[];
  value?: string;
  className?: string;
  label?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

const Select = (props: SelectProps) => {
  const { options, value, label, readonly, className, onChange } = props;

  const optionList = useMemo(
    () =>
      options.map((opt) => (
        <option className={cls.option} key={opt.label} value={opt.value}>
          {opt.label}
        </option>
      )),
    [options]
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={cn(cls['select-wrapper'], { [cls.readonly]: readonly }, className)}>
      {label ? <div className={cls.label}>{label}</div> : null}
      <select value={value} onChange={handleChange} className={cls.select} disabled={readonly}>
        {optionList}
      </select>
    </div>
  );
};

export default Select;
