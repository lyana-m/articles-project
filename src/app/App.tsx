import React, { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageError } from 'widgets/PageError';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '../shared/hooks/useAppDispatch/useAppDispatch';
import { userActions } from 'entities/User';
import { USER_LOCALSTORAGE_AUTHDATA } from 'shared/constants/localStorage';

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_AUTHDATA);

    if (user) {
      dispatch(userActions.setUserAuthData(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        {/* @ts-expect-error */}
        <ErrorBoundary fallback={<PageError />}>
          <div className="main-content">
            <Sidebar />
            <AppRouter />
          </div>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};
