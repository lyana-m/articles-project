import React from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button } from 'shared/ui/Button';
import BellIcon from 'shared/assets/icons/bell.svg';
import { NotificationList } from 'entities/Notification';

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;

  return (
    <div>
      <Popover
        trigger={
          <Button>
            <BellIcon />
          </Button>
        }
        position="bottom-right"
        className={className}
      >
        <NotificationList />
      </Popover>
    </div>
  );
};

export default NotificationButton;
