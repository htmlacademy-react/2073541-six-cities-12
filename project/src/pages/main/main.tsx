import { useState } from 'react';
import Layout from '../../components/layout/layout';
import Offers from '../../components/offers/offers';
import Map from '../../components/map/map';
import Tabs from '../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { cityChange } from '../../store/action';
import cn from 'classnames';

function MainPage(): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const onChangeCity = (city: string) => {
    dispatch(cityChange(city));
  };
  const offers = useAppSelector((state) => state.offers);
  const currentCityOffers = offers.filter(
    (offer) => offer.city.name === currentCity
  );
  return (
    <Layout className="page--gray page--main" pageTitle='6 cities'>
      <main className={cn('page__main page__main--index', (currentCityOffers.length === 0) && 'page__main--index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs currentCity={currentCity} onChangeCity={onChangeCity} />
        <div className="cities">
          {(currentCityOffers.length !== 0) ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentCityOffers.length} places to stay in {currentCity}</b>
                <Sort />
                <div className="cities__places-list places__list tabs__content">
                  <Offers offers={currentCityOffers} cardType="cities" onMouseEnter={setActiveCard} onMouseLeave={setActiveCard} />
                </div>
              </section>
              <div className="cities__right-section">
                <Map offers={currentCityOffers} currentOfferId={activeCard} className="cities__map" />
              </div>
            </div>
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
                </div>
              </section>
              <div className="cities__right-section" />
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default MainPage;
