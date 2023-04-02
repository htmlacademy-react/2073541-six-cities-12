
import Layout from '../../components/layout/layout';
import Offers from '../../components/offers/offers';
import Map from '../../components/map/map';
import Tabs from '../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import cn from 'classnames';
import MainEmpty from '../../components/main-empty/main-empty';
import { sortOffers } from '../../utils/utils';

function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const activeCard = useAppSelector((state) => state.currentOfferId);
  const onChangeCity = (city: string) => { dispatch(changeCity(city)); };
  const offers = useAppSelector((state) => state.offers);
  const currentCityOffers = offers.filter(
    (offer) => offer.city.name === currentCity
  );
  const currentSortOption = useAppSelector((state) => state.sortOption);
  const sortedOffers = sortOffers(currentCityOffers, currentSortOption);

  return (
    <Layout className="page--gray page--main" pageTitle='6 cities'>
      <main className={cn('page__main page__main--index', (currentCityOffers.length === 0) && 'page__main--index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs currentCity={currentCity} onChangeCity={onChangeCity} />
        {(currentCityOffers.length > 0) ? (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentCityOffers.length} places to stay in {currentCity}</b>
                <Sort />
                <div className="cities__places-list places__list tabs__content">
                  <Offers offers={sortedOffers} cardType="cities" />
                </div>
              </section>
              <div className="cities__right-section">
                <Map offers={currentCityOffers} currentOfferId={activeCard} className="cities__map" />
              </div>
            </div>
          </div>
        ) : (
          <MainEmpty city={currentCity} />
        )}
      </main>
    </Layout>
  );
}

export default MainPage;
