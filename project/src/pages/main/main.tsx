import Layout from '../../components/layout/layout';
import { Offer } from '../../types/offers';
import Offers from '../../components/offers/offers';
import Map from '../../components/map/map';
import Tabs from '../../components/tabs/tabs';
import Sort from '../../components/sort/sort';


type MainPageProps = {
  offers: Offer[];
  numberOfCards: number;
}

function MainPage({ offers, numberOfCards }: MainPageProps): JSX.Element {

  return (
    <Layout className="page--gray page--main" pageTitle='6 cities'>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{numberOfCards} places to stay in Amsterdam</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <Offers offers={offers} cardType='cities' />
              </div>
            </section>
            <div className="cities__right-section">
              <Map className='cities__map' />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default MainPage;
