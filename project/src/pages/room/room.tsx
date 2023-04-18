import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Review } from '../../types/reviews';
import { calculateRatingPercent, capitalize } from '../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getNearOffers, getOffer, getNearOffersStatus, getOfferStatus } from '../../store/room-slice/room-slice-selectors';
import { fetchOfferAction, fetchNearOffersAction } from '../../store/api-actions';
import Layout from '../../components/layout/layout';
import Offers from '../../components/offers/offers';
import Map from '../../components/map/map';
import Reviews from '../../components/reviews/reviews';
import { AppRoute } from '../../const';


//const NEAR_OFFERS_AMOUNT = 3;
const MAX_PHOTOS_AMOUNT = 6;

type RoomPageProps = {
  reviews: Review[];
}

function RoomPage({ reviews }: RoomPageProps): JSX.Element {

  const dispatch = useAppDispatch();

  const id = Number(useParams().id);
  const offer = useAppSelector(getOffer);
  const offerStatus = useAppSelector(getOfferStatus);
  const nearOffers = useAppSelector(getNearOffers);
  const nearOffersStatus = useAppSelector(getNearOffersStatus);

  useEffect(() => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchNearOffersAction(id));
  }, []);


  console.log(offerStatus, nearOffersStatus);

  if (!offer) {
    return (<Navigate to={AppRoute.Main} />);
  }

  const { images, rating, title, type, bedrooms, maxAdults, price, goods, description } = offer;
  const { avatarUrl, isPro, name } = offer.host;
  console.log(offer);

  return (
    <Layout className="page" pageTitle='6 cities: property'>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, MAX_PHOTOS_AMOUNT).map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt={title} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: calculateRatingPercent(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalize(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item) => (
                    <li className="property__inside-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews reviews={reviews} />
            </div>
          </div>
          <Map offers={[...nearOffers, offer]} currentOfferId={Number(id)} className="property__map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <Offers offers={nearOffers} cardType="near-places" />
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
export default RoomPage;


