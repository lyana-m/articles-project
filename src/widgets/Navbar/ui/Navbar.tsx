import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useAppSelector, useAppDispatch } from 'shared/hooks/useDispatch';
import cls from './Navbar.module.scss';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
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
    return <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={handleLogout} className={cls.login} theme="clearInverted">
        {t('Выйти')}
      </Button>
    </div>;
  }

  return (
    <>
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button onClick={handleLoginModalOpen} className={cls.login} theme="clearInverted">
          {t('Войти')}
        </Button>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalClose} />
    </>
  );
};

export default Navbar;
