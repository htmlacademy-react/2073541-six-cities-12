import { useState } from 'react';
import { Offer } from '../../types/offers';
import CitiesCard from '../card/card';


type OffersProps = {
  offers: Offer[];
}

function Offers({ offers }: OffersProps): JSX.Element {
  const [, setActiveCard] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list">
      {offers.map((offer) => (
        <CitiesCard offer={offer} key={offer.id} onMouseEnter={setActiveCard} onMouseLeave={setActiveCard} />
      ))}
    </div>
  );
}

export default Offers;

