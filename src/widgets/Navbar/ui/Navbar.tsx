import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Dropdown } from 'shared/ui/Dropdown';
import { LoginModal } from 'features/AuthByUsername';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import cls from './Navbar.module.scss';
import { getUserAuthData, isAdmin, isManager, userActions } from 'entities/User';
import { Avatar } from 'shared/ui/Avatar';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

const Navbar = memo(() => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const authData = useAppSelector(getUserAuthData);
  const isUserAdmin = useAppSelector(isAdmin);
  const isUserManager = useAppSelector(isManager);

  const isAccessAllowed = isUserAdmin || isUserManager;

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

  const navigateToProfile = useCallback(() => {
    if (authData?.id) {
      navigate(`${RoutePath.profile}/${authData.id}`);
    }
  }, [navigate, authData?.id]);

  const navigateToAdmin = useCallback(() => {
    navigate(RoutePath.admin);
  }, [navigate]);

  if (authData) {
    return (
      <div className={cls.Navbar}>
        <Dropdown
          trigger={<Avatar size={30} src={authData.avatar} />}
          items={[
            { name: t('Профиль'), onClick: navigateToProfile },
            ...(isAccessAllowed ? [{ name: t('Админка'), onClick: navigateToAdmin }] : []),
            { name: t('Выйти'), onClick: handleLogout },
          ]}
          position="bottom-right"
          className={cls.login}
        />
      </div>
    );
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
