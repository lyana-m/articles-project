import { UserRole, getUserAuthData, getUserRoles } from 'entities/User';
import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';

interface ProtectedRouteProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
  const isAuth = useAppSelector(getUserAuthData);
  const userRoles = useAppSelector(getUserRoles);

  const hasRequiredRole = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((role) => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!isAuth) {
    return <Navigate to={RoutePath.main} replace />;
  }

  if (!hasRequiredRole) {
    return <Navigate to={RoutePath.forbidden} replace />;
  }

  return children;
};
