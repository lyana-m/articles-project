import { getUserAuthData } from 'entities/User';
import { Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuth = useAppSelector(getUserAuthData);

  if (!isAuth) {
    return <Navigate to={RoutePath.main} replace />;
  }

  return children;
};
