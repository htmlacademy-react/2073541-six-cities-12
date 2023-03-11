
import { Offer } from '../../types/offers';
import CitiesCard from '../card/card';

type OffersProps = {
  offers: Offer[];
}

function Offers({ offers }: OffersProps): JSX.Element {
  console.log(offers);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard offer={offer} key={offer.id} />
      ))}
    </div>
  );
}

export default Offers;

