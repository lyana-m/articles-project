import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/hooks/useDispatch';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginAuth } from '../../model/selectors/getLoginAuth';
import { loginByUsername } from '../../model/services/loginByUsername';
import cls from './LoginForm.module.scss';

const LoginForm = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { username, password, isLoading, error } = useAppSelector(getLoginAuth);

  const handleLoginChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const handleLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm)}>
      <Text className={cls.title} title={t('Форма авторизации')} />
      <Input className={cls.loginInput} label={t('Логин')} value={username} onChange={handleLoginChange} />
      <Input className={cls.loginInput} label={t('Пароль')} value={password} onChange={handlePasswordChange} />
      {error ? <Text text={t('Неправильный логин или пароль')} theme="error" className={cls.error} /> : null}
      <Button className={cls.loginBtn} theme="backgroundInverted" onClick={handleLogin} disabled={isLoading}>
        {t('Войти')}
      </Button>
    </div>
  );
};
export default LoginForm;
