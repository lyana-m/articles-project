import { Fragment } from 'react';
import { Listbox as BaseListBox } from '@headlessui/react';
import cn from 'classnames';
import cls from './ListBox.module.scss';
import popupCls from '../styles/popups.module.scss';
import { DropdownPosition } from '../../../../types';
import { VStack } from '../../../Stack';

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
  position?: DropdownPosition;
  label?: string;
  className?: string;
  onChange: (value: T) => void;
}

const Listbox = <T extends string>(props: ListBoxProps<T>) => {
  const { options, value, defaultValue, readonly, label, position = 'bottom-left', className, onChange } = props;

  const displayedValue = options.find((o) => o.value === value)?.label;

  return (
    <VStack alignItems="flex-start" gap="2" className={className}>
      {label ? <div className={cn(cls.label, { [cls.readonly]: readonly })}>{label}</div> : null}
      <div className={popupCls.container}>
        <BaseListBox value={value} disabled={readonly} onChange={onChange}>
          <BaseListBox.Button className={cn(cls.button, { [cls.readonly]: readonly })}>
            {displayedValue ?? defaultValue}
          </BaseListBox.Button>
          <BaseListBox.Options className={cn(popupCls.dropdown, popupCls[position])}>
            {options.map((option) => (
              <BaseListBox.Option key={option.value} value={option.value} disabled={option.disabled} as={Fragment}>
                {({ active, selected }: { active: boolean; selected: boolean }) => (
                  <li
                    className={cn(popupCls.item, {
                      [popupCls.active]: active,
                      [popupCls.selected]: selected,
                      [popupCls.disabled]: option.disabled,
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
    </VStack>
  );
};

export default Listbox;
