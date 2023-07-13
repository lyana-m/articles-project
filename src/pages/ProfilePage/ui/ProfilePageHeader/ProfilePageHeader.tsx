import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import cls from './ProfilePageHeader.module.scss';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';

const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');

  const readonly = useAppSelector(getProfileReadonly);
  const userData = useAppSelector(getUserAuthData);
  const profileData = useAppSelector(getProfileData);

  const canEdit = userData?.id === profileData?.id;

  const dispatch = useAppDispatch();

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleEditCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={cls.header}>
      <Text title={t('Профиль')} />
      {canEdit && <div>
        {readonly ? (
          <Button theme="outline" onClick={handleEdit}>
            {t('Редактировать')}
          </Button>
        ) : (
          <>
            <Button theme="outline" onClick={handleSave}>
              {t('Сохранить')}
            </Button>
            <Button theme="outline_red" onClick={handleEditCancel}>
              {t('Отменить')}
            </Button>
          </>
        )}
      </div>}
    </div>
  );
};

export default ProfilePageHeader;
