import { Link } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import { Offer } from '../../types/offers';
import Offers from '../../components/offers/offers';

type FavoritesProps = {
  offers: Offer[];
}
type OffersByCity = {
  [cityName: string]: Offer[];
}


function FavoritesPage({ offers }: FavoritesProps): JSX.Element {

  function filterByIsFavorite(allOffers: Offer[]): Offer[] {

    return allOffers.filter((offer) => offer.isFavorite);
  }
  const favoriteOffers = filterByIsFavorite(offers);

  function groupOffersByCity(allOffers: Offer[]): OffersByCity {

    return allOffers.reduce((offersByCity: OffersByCity, offer) => {
      const { city: { name: cityName } } = offer;
      if (!offersByCity[cityName]) {
        offersByCity[cityName] = [];
      }
      offersByCity[cityName].push(offer);
      return offersByCity;
    }, {});
  }
  const offersByCity = groupOffersByCity(favoriteOffers);

  return (
    <Layout pageTitle='6 cities: favorites'>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
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
                      <Offers offers={cityOffers} />
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
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


