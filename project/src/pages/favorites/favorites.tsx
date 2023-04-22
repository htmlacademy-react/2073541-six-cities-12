import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Offer } from '../../types/offers';
import { fetchFavoritesAction } from '../../store/api-actions';
import { getFavorites } from '../../store/favorites-slice/favorites-slice-selectors';
import Offers from '../../components/offers/offers';
import Layout from '../../components/layout/layout';


type OffersByCity = {
  [cityName: string]: Offer[];
}

function groupOffersByCity(offers: Offer[]): OffersByCity {

  return offers.reduce<OffersByCity>((acc, offer) => {
    const { city: { name: cityName } } = offer;

    if (!acc[cityName]) {
      acc[cityName] = [];
    }

    acc[cityName].push(offer);

    return acc;
  }, {});
}

function FavoritesPage(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const favoriteOffers = useAppSelector(getFavorites);
  const offersByCity = groupOffersByCity(favoriteOffers);

  return (
    <Layout pageTitle='6 cities: favorites'>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  Object.entries(offersByCity).map(([city, cityOffers]) => (
                    <li key={city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="/#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <Offers offers={cityOffers} cardType='favorites' />
                      </div>
                    </li>
                  ))
                }
              </ul>
            </section>
            :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </section>}
        </div>
      </main>
      <footer className="footer container">
        <Link to="/" className="footer__logo-link" >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </Layout>
  );
}
export default FavoritesPage;


