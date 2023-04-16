import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme="secondary" className={cls.mainLink} to="/">{t('Главная')}</AppLink>
        <AppLink theme="secondary" to="/about">{t('О нас')}</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
