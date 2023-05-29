import React, { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageError } from 'widgets/PageError';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '../shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getUserInited, userActions } from 'entities/User';

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  const isUserInited = useAppSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initUserAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        {/* @ts-expect-error */}
        <ErrorBoundary fallback={<PageError />}>
          <div className="main-content">
            <Sidebar />
            {isUserInited && <AppRouter />}
          </div>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};
