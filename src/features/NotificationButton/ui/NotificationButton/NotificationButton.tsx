import React, { useCallback, useState } from 'react';
import { Popover } from '@/shared/ui/Popups';
import { Button } from '@/shared/ui/Button';
import BellIcon from '@/shared/assets/icons/bell.svg';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';
import { useDevice } from '@/shared/hooks/useDevice/useDevice';

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useDevice();

  const handleOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={handleOpenDrawer}>
      <BellIcon />
    </Button>
  );

  return (
    <div>
      {isMobile ? (
        <>
          {trigger}
          <Drawer isOpen={isOpen} onClose={handleCloseDrawer}>
            <NotificationList className={cls.listMobile} />
          </Drawer>
        </>
      ) : (
        <Popover trigger={trigger} position="bottom-right" className={className}>
          <NotificationList />
        </Popover>
      )}
    </div>
  );
};

export default NotificationButton;
