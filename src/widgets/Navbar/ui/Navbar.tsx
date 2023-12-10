import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import cls from './Navbar.module.scss';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';

const Navbar = memo(() => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { t } = useTranslation();

  const authData = useAppSelector(getUserAuthData);

  const handleLoginModalOpen = useCallback(() => {
    setIsLoginModalOpen(true);
  }, []);

  const handleLoginModalClose = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  if (authData) {
    return (
      <div className={cls.Navbar}>
        <HStack gap="12" className={cls.actions} fullWidth={false}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </div>
    );
  }

  return (
    <>
      <div className={cls.Navbar}>
        <Button onClick={handleLoginModalOpen} className={cls.actions} theme="clearInverted">
          {t('Войти')}
        </Button>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalClose} />
    </>
  );
});

export default Navbar;
