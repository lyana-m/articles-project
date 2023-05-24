import React, { Suspense, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getUserAuthData } from 'entities/User';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
  const isAuth = useAppSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
