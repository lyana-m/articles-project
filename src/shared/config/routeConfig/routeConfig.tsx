import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFound';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticleListPage } from '@/pages/ArticleListPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { AdminPage } from '@/pages/AdminPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { UserRole } from '@/entities/User';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'asticles',
  ARTICLE = 'asticle',
  ADMIN = 'admin',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile', // + id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE]: '/articles', // + id
  [AppRoutes.ADMIN]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath[AppRoutes.PROFILE]}/:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath[AppRoutes.ARTICLES],
    element: <ArticleListPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE]: {
    path: `${RoutePath[AppRoutes.ARTICLE]}/:id`,
    element: <ArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN]: {
    path: RoutePath[AppRoutes.ADMIN],
    element: <AdminPage />,
    authOnly: true,
    roles: ['ADMIN', 'MANAGER'],
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePath[AppRoutes.FORBIDDEN],
    element: <ForbiddenPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
