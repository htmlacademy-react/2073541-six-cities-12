import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import { getIsAuthorized } from '../../store/user-slice/user-slice-selectors';


type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {

  const isAuth = useAppSelector(getIsAuthorized);

  return (
    isAuth ? children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
