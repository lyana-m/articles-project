import { type InputHTMLAttributes, type ChangeEvent, useState, memo } from 'react';
import cn from 'classnames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

const Input = memo((props: InputProps) => {
  const { className, value, label, readonly, onChange, type = 'text', ...otherProps } = props;

  const [focused, setFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const mods = {
    [cls.active]: focused || !!value,
    [cls.readonly]: readonly,
  };

  return (
    <div className={cn(cls.Input, className)}>
      {label ? <div className={cn(cls.label, mods)}>{label}</div> : null}
      <input
        className={cls.htmlInput}
        value={value}
        type={type}
        readOnly={readonly}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...otherProps}
      />
    </div>
  );
});

export default Input;
