import cn from 'classnames';
import { SortOptions } from '../../const';
import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSort } from '../../store/offers-slice/offers-slice';
import { getSortOption } from '../../store/offers-slice/offers-slice-selectors';


function Sort(): JSX.Element {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const currentSortOption = useAppSelector(getSortOption);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSortClick = (option: SortOptions) => {
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
      <ul
        ref={dropdownRef}
        className={cn('places__options', 'places__options--custom', { 'places__options--opened': open })}
      >
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
