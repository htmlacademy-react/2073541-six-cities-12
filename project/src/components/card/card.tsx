import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Offer } from '../../types/offers';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { capitalize } from '../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { calculateRatingPercent } from '../../utils/utils';
import { getIsAuthorized } from '../../store/user-slice/user-slice-selectors';
import { addToFavoritesAction } from '../../store/api-actions';

type CardProps = {
  offer: Offer;
  cardType: 'cities' | 'favorites' | 'near-places';
  onMouseEnter?: (activeCard: number) => void;
  onMouseLeave?: (activeCard: number | null) => void;
}

const sizes = {
  'cities': {
    width: '260',
    height: '200'
  },
  'near-places': {
    width: '260',
    height: '200'
  },
  'favorites': {
    width: '150',
    height: '110'
  }
};


function CitiesCard({ offer, cardType, onMouseEnter, onMouseLeave }: CardProps): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { price, rating, title, type, isPremium, id, images, isFavorite } = offer;

  const size = sizes[cardType];

  const isAuth = useAppSelector(getIsAuthorized);

  const handleButtonClick = () => {
    if (!isAuth) {
      navigate(AppRoute.Login);

      return;
    }
    dispatch(addToFavoritesAction({
      id: id,
      status: Number(!isFavorite)
    }));
  };

  return (
    <article className={`${cardType}__card place-card`} onMouseEnter={onMouseEnter && (() => onMouseEnter(id))} onMouseLeave={onMouseLeave && (() => onMouseLeave(null))}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Room, { id: `${id}` })}>
          <img
            className="place-card__image"
            src={images[0]}
            width={size.width}
            height={size.height}
            alt={title}
          />
        </Link>
      </div>
      <div className={`${cardType}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={handleButtonClick}
            className={cn('place-card__bookmark-button button', isFavorite && 'place-card__bookmark-button--active')}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: calculateRatingPercent(rating) }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Room, { id: `${offer.id}` })} > {title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article >
  );
}

export default CitiesCard;
