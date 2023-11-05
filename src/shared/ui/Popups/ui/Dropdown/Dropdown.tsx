import { Menu } from '@headlessui/react';
import cn from 'classnames';
import popupCls from '../styles/popups.module.scss';
import { Fragment, ReactNode } from 'react';
import { DropdownPosition } from '../../../../types';

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
    <Menu as="div" className={cn(popupCls.container, className)}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={cn(popupCls.dropdown, popupCls[position])}>
        {items.map((item) => (
          <Menu.Item key={item.name} as={Fragment} disabled={item.disabled}>
            {({ active }) => (
              <li
                className={cn(popupCls.item, { [popupCls.active]: active, [popupCls.disabled]: item.disabled })}
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
