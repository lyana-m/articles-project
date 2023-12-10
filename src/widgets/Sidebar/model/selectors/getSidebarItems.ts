import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { User, getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData?: User) => {
  const sidebarItems: SidebarItemType[] = [
    {
      link: RoutePath.main,
      text: 'Главная',
      Icon: HomeIcon,
    },
    {
      link: RoutePath.about,
      text: 'О нас',
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sidebarItems.push(
      {
        link: `${RoutePath.profile}/${userData.id}`,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        link: RoutePath.asticles,
        text: 'Статьи',
        Icon: ArticleIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItems;
});
