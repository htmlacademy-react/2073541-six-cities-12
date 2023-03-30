import { CITIES } from '../../const';
import cn from 'classnames';

type TabsProps = {
  currentCity: string;
  onChangeCity: (city: string) => void;
};

function Tabs({ currentCity, onChangeCity }: TabsProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => {
            const className = cn('locations__item-link tabs__item', (currentCity === city) && 'tabs__item--active');
            return (
              <li className="locations__item" key={city}>
                <a
                  className={className}
                  href="/#"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onChangeCity(city);
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

