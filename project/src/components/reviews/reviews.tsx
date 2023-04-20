import { useAppSelector } from '../../hooks';
import { Review } from '../../types/reviews';
import { getIsAuthorized } from '../../store/user-slice/user-slice-selectors';
import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';

type ReviewsProps = {
  reviews: Review[];
  id: number;
};

function Reviews({ reviews, id }: ReviewsProps): JSX.Element {

  const isAuth = useAppSelector(getIsAuthorized);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      {isAuth && <ReviewForm id={id} />}
    </section>
  );
}

export default Reviews;
