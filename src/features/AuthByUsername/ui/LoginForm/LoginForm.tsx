import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

const LoginForm = () => {
  const { t } = useTranslation();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classNames(cls.LoginForm)}>
      <Input className={cls.loginInput} label={t('Логин')} value={login} onChange={setLogin} />
      <Input className={cls.loginInput} label={t('Пароль')} value={password} onChange={setPassword} />
      <Button className={cls.loginBtn} theme="backgroundInverted">
        {t('Войти')}
      </Button>
    </div>
  );
};
export default LoginForm;
