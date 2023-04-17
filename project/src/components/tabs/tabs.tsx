import cn from 'classnames';
import { Cities } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/offers-slice/offers-slice';


type TabsProps = {
  currentCity: string;
};

function Tabs({ currentCity }: TabsProps): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.entries(Cities).map(([_, city]) => {
            const className = cn('locations__item-link tabs__item', (currentCity === city) && 'tabs__item--active');
            return (
              <li className="locations__item" key={city}>
                <a
                  className={className}
                  href="/#"
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(changeCity(city));
                  }}
                >
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;

