import { type InputHTMLAttributes, type ChangeEvent, useState, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
}

const Input = memo((props: InputProps) => {
  const { className, value, label, onChange, type = 'text', ...otherProps } = props;

  const [focused, setFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      {label ? <div className={classNames(cls.label, { [cls.active]: focused || !!value })}>{label}</div> : null}
      <input
        className={cls.htmlInput}
        value={value}
        type={type}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...otherProps}
      />
    </div>
  );
});

export default Input;
