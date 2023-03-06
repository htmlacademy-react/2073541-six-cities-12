import { Route, BrowserRouter, Routes } from 'react-router-dom';

import MainPage from '../../pages/main/main';
import FavoritesPage from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login/login';
import NotFoundPage from '../../pages/not-found/not-found';

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

type AppScreenProps = {
  numberOfCards: number;
}

function App({ numberOfCards }: AppScreenProps): JSX.Element {
  return (
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
          path={AppRoute.Favorites}
          element={<FavoritesPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>);
}

export default App;
