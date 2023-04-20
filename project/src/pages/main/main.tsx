import cn from 'classnames';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffers, getOffersStatus } from '../../store/offers-slice/offers-slice-selectors';
import { getOffersCity, getSelectedOfferId, getSortOption, } from '../../store/app-slice/app-slice-selectors';
import { sortOffers } from '../../utils/utils';
import { fetchOffersAction } from '../../store/api-actions';
import Layout from '../../components/layout/layout';
import Offers from '../../components/offers/offers';
import Map from '../../components/map/map';
import Tabs from '../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import MainEmpty from '../../components/main-empty/main-empty';
import Error from '../../components/error/error';
import LoadingScreen from '../loading-screen/loading-screen';


function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getOffersCity);
  const activeCardId = useAppSelector(getSelectedOfferId);
  const currentSortOption = useAppSelector(getSortOption);
  const offers = useAppSelector(getOffers);
  const status = useAppSelector(getOffersStatus);


  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);


  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity);
  const sortedOffers = sortOffers(filteredOffers, currentSortOption);
  const isEmpty = filteredOffers.length === 0;

  if (status.isError) {
    return <Error />;
  }

  if (status.isLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Layout className="page--gray page--main" pageTitle='6 cities'>
      <main className={cn('page__main page__main--index', isEmpty && 'page__main--index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs currentCity={currentCity} />
        {!isEmpty ? (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
                <Sort />
                <div className="cities__places-list places__list tabs__content">
                  <Offers offers={sortedOffers} cardType="cities" />
                </div>
              </section>
              <div className="cities__right-section">
                <Map offers={filteredOffers} currentOfferId={activeCardId} className="cities__map" />
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
