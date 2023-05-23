import { type InputHTMLAttributes, type ChangeEvent, useState, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

const Input = memo((props: InputProps) => {
  const { className, value, label, readOnly, onChange, type = 'text', ...otherProps } = props;

  const [focused, setFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const mods = {
    [cls.active]: focused || !!value,
    [cls.readonly]: readOnly,
  };

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      {label ? <div className={classNames(cls.label, mods)}>{label}</div> : null}
      <input
        className={cls.htmlInput}
        value={value}
        type={type}
        readOnly={readOnly}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...otherProps}
      />
    </div>
  );
});

export default Input;
