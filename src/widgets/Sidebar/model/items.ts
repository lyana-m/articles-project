import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemType {
  link: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const sidebarItems: SidebarItemType[] = [
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
  {
    link: RoutePath.profile,
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
];
