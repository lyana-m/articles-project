import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import cls from './Navbar.module.scss';
import { getUserAuthData, userActions } from 'entities/User';

const Navbar = memo(() => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { t } = useTranslation();

  const authData = useAppSelector(getUserAuthData);

  const dispatch = useAppDispatch();

  const handleLoginModalOpen = useCallback(() => {
    setIsLoginModalOpen(true);
  }, []);

  const handleLoginModalClose = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return <div className={cls.Navbar}>
      <Button onClick={handleLogout} className={cls.login} theme="clearInverted">
        {t('Выйти')}
      </Button>
    </div>;
  }

  return (
    <>
      <div className={cls.Navbar}>
        <Button onClick={handleLoginModalOpen} className={cls.login} theme="clearInverted">
          {t('Войти')}
        </Button>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalClose} />
    </>
  );
});

export default Navbar;
