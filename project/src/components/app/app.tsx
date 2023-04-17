import browserHistory from '../../browser-history/browser-history';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';
import { Review } from '../../types/reviews';
import { getAuthorizationStatus } from '../../store/user-slice/user-slice-selectors';
import { getOffers } from '../../store/offers-slice/offers-slice-selectors';
import MainPage from '../../pages/main/main';
import FavoritesPage from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login/login';
import NotFoundPage from '../../pages/not-found/not-found';
import RoomPage from '../../pages/room/room';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';

import { useEffect } from 'react';
import { checkAuthAction } from '../../store/api-actions';

type AppScreenProps = {
  reviews: Review[];
}

function App({ reviews }: AppScreenProps): JSX.Element {

  const dispatch = useAppDispatch();

  const offers = useAppSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Room}
            element={<RoomPage reviews={reviews} offers={offers} />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
