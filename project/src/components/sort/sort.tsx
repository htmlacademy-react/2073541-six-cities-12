import cn from 'classnames';
import { SortOptions } from '../../const';
import { useState } from 'react';

function Sort(): JSX.Element {
  const [open, setOpen] = useState(false);


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => { setOpen(!open); }}>
        {SortOptions.POPULAR}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${open ? 'places__options--opened' : ''}`}>
        {Object.values(SortOptions).map((option) => (
          <li
            key={option}
            className={cn('places__option', {
              'places__option--active': option === SortOptions.POPULAR
            })}
            tabIndex={0}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;


