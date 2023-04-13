import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageError } from 'widgets/PageError';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
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
