import { Fragment } from 'react';
import { Listbox as BaseListBox } from '@headlessui/react';
import cn from 'classnames';
import cls from './ListBox.module.scss';

type ListBoxPosition = 'bottom' | 'top';

interface ListBoxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  options: ListBoxOption[];
  value?: string;
  displayedValue?: string;
  defaultValue?: string;
  readonly?: boolean;
  position?: ListBoxPosition;
  label?: string;
  className?: string;
  onChange: (value: T) => void;
}

const Listbox = <T extends string>(props: ListBoxProps<T>) => {
  const { options, value, defaultValue, readonly, label, position = 'bottom', className, onChange } = props;

  const displayedValue = options.find(o => o.value === value)?.label;

  return (
    <div className={className}>
      {label ? <div className={cn(cls.label, { [cls.readonly]: readonly })}>{label}</div> : null}
      <div className={cls.container}>
        <BaseListBox value={value} disabled={readonly} onChange={onChange}>
          <BaseListBox.Button className={cn(cls.button, { [cls.readonly]: readonly })}>
            {displayedValue ?? defaultValue}
          </BaseListBox.Button>
          <BaseListBox.Options className={cn(cls.list, cls[position])}>
            {options.map((option) => (
              <BaseListBox.Option key={option.value} value={option.value} disabled={option.disabled} as={Fragment}>
                {({ active, selected }: { active: boolean; selected: boolean }) => (
                  <li
                    className={cn(cls.item, {
                      [cls.active]: active,
                      [cls.selected]: selected,
                      [cls.disabled]: option.disabled,
                    })}
                  >
                    {option.label}
                  </li>
                )}
              </BaseListBox.Option>
            ))}
          </BaseListBox.Options>
        </BaseListBox>
      </div>
    </div>
  );
};

export default Listbox;
