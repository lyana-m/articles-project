import React, { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeButton } from 'widgets/ThemeButton';
import { LangButton } from 'widgets/LangButton';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
// import { BugButton } from 'widgets/PageError';
import { Button } from 'shared/ui/Button';
import cls from './Sidebar.module.scss';
import AppLink from 'shared/ui/AppLink/AppLink';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid="sidebar">
      <Button className={cls.collapseBtn} theme="backgroundInverted" square size="l" onClick={toggle}>
        {collapsed ? '>' : '<'}
      </Button>
      {/* <BugButton /> */}
      <div className={cls.links}>
        <AppLink theme="secondary" className={cls.link} to={RoutePath.main}>
          <HomeIcon />
          <span>{t('Главная')}</span>
        </AppLink>
        <AppLink theme="secondary" className={cls.link} to={RoutePath.about}>
          <AboutIcon />
          <span>{t('О нас')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeButton />
        <LangButton className={cls.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
