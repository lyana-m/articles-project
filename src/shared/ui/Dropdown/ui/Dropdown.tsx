import { Menu } from '@headlessui/react';
import cn from 'classnames';
import cls from './Dropdown.module.scss';
import { Fragment, ReactNode } from 'react';
import { DropdownPosition } from '../../../types';

interface DropdownItem {
  name: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  position?: DropdownPosition;
  className?: string;
}

const Dropdown = (props: DropdownProps) => {
  const { trigger, items, position = 'bottom-left', className } = props;

  return (
    <Menu as="div" className={cn(cls.menu, className)}>
      <Menu.Button className={cls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={cn(cls.dropdown, cls[position])}>
        {items.map((item) => (
          <Menu.Item key={item.name} as={Fragment} disabled={item.disabled}>
            {({ active }) => (
              <li
                className={cn(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled })}
                onClick={item.onClick}
              >
                {item.name}
              </li>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
