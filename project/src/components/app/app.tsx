import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainPage from '../../pages/main/main';
import FavoritesPage from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login/login';
import NotFoundPage from '../../pages/not-found/not-found';
import RoomPage from '../../pages/property/property';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';


type AppScreenProps = {
  numberOfCards: number;
}

function App({ numberOfCards }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage numberOfCards={numberOfCards} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Room}
            element={<RoomPage numberOfCards={3} />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
