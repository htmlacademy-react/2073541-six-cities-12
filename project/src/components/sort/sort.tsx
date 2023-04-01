import cn from 'classnames';
import { SortOptions } from '../../const';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSort } from '../../store/action';

function Sort(): JSX.Element {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const currentSortOption = useAppSelector((state) => state.sortOption);
  const handleSortClick = (option: string) => {
    dispatch(changeSort(option));
    setOpen(!open);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => { setOpen(!open); }}>
        {currentSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options', 'places__options--custom', { 'places__options--opened': open })}>
        {Object.values(SortOptions).map((option) => (
          <li
            key={option}
            className={cn('places__option', {
              'places__option--active': option === currentSortOption
            })}
            tabIndex={0}
            onClick={() => { handleSortClick(option); }}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;


