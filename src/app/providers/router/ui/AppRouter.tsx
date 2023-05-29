import React, { Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { ProtectedRoute } from './ProtectedRoute';

function AppRouter() {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const { path, element, authOnly } = route;
    const elementToRender = (
      <Route
        key={path}
        path={path}
        element={
          <div className="page-wrapper">
            {authOnly ? <ProtectedRoute>{element as JSX.Element}</ProtectedRoute> : element}
          </div>
        }
      />
    );

    return elementToRender;
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map((route) => renderWithWrapper(route))}</Routes>
    </Suspense>
  );
}

export default AppRouter;
