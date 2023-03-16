import React, { useState, ChangeEvent } from 'react';

const RATINGS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

function Review(): JSX.Element {

  const [reviewData, setReviewData] = useState({
    rating: 0,
    comment: ''
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setReviewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((rating) => (
          <React.Fragment key={rating.value}>
            <input
              onChange={handleInputChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={rating.value}
              id={`${rating.value}-stars`}
              type="radio"
            />
            <label htmlFor={`${rating.value}-stars`} className="reviews__rating-label form__rating-label" title={rating.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        onChange={handleInputChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewData.comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>
          and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Review;
