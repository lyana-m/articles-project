import React, { ReactNode } from 'react';
import { Popover as BasePopover } from '@headlessui/react';
import cn from 'classnames';
import cls from './Popover.module.scss';
import popupCls from '../styles/popups.module.scss';
import { DropdownPosition } from '@/shared/types';

interface PopoverProps {
  children: ReactNode;
  trigger: ReactNode;
  position?: DropdownPosition;
  className?: string;
}

const Popover = (props: PopoverProps) => {
  const { children, trigger, position = 'bottom-left', className } = props;

  return (
    <BasePopover className={cn(className, popupCls.container)}>
      <BasePopover.Button className={popupCls.trigger}>{trigger}</BasePopover.Button>

      <BasePopover.Panel className={cn(cls.dropdown, popupCls.dropdown, popupCls[position])} unmount={false}>
        {children}
      </BasePopover.Panel>
    </BasePopover>
  );
};

export default Popover;
