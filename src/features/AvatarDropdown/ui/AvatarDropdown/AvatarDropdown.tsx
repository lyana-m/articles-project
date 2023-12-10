import React, { useCallback } from 'react';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { getUserAuthData, isAdmin, isManager, userActions } from '@/entities/User';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface AvatarDropdownProps {
  className?: string;
}

const AvatarDropdown = (props: AvatarDropdownProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authData = useAppSelector(getUserAuthData);
  const isUserAdmin = useAppSelector(isAdmin);
  const isUserManager = useAppSelector(isManager);

  const isAccessAllowed = isUserAdmin || isUserManager;

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

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      trigger={<Avatar size={30} src={authData.avatar} />}
      items={[
        { name: t('Профиль'), onClick: navigateToProfile },
        ...(isAccessAllowed ? [{ name: t('Админка'), onClick: navigateToAdmin }] : []),
        { name: t('Выйти'), onClick: handleLogout },
      ]}
      position="bottom-right"
      className={className}
    />
  );
};

export default AvatarDropdown;
