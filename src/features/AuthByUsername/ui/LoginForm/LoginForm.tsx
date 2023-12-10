import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { useAsyncReducers, AsyncReduser } from '@/shared/hooks/useAsyncReducers/useAsyncReducers';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { Loader } from '@/shared/ui/Loader';

const reducers: AsyncReduser[] = [{ reducerKey: 'login', reducer: loginReducer }];

const LoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useAsyncReducers(reducers);

  const username = useAppSelector(getLoginUsername) || '';
  const password = useAppSelector(getLoginPassword) || '';
  const isLoading = useAppSelector(getLoginLoading);
  const error = useAppSelector(getLoginError);

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

  const handleLogin = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);

  if (isLoading) {
    return (
      <div className={cls.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={cls.LoginForm}>
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
