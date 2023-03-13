import { useState } from 'react';
import { Offer } from '../../types/offers';
import CitiesCard from '../card/card';


type OffersProps = {
  offers: Offer[];
}

function Offers({ offers }: OffersProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  console.log(activeCard);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard offer={offer} key={offer.id} onMouseOver={setActiveCard} />
      ))}
    </div>
  );
}

export default Offers;

