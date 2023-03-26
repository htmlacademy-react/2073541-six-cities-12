
import { Offer } from '../../types/offers';
import CitiesCard from '../card/card';


type OffersProps = {
  offers: Offer[];
  cardType: 'cities' | 'favorites' | 'near-places';
  onMouseEnter?: (activeCard: number) => void;
  onMouseLeave?: (activeCard: number | null) => void;
}

function Offers({ offers, cardType, onMouseEnter, onMouseLeave }: OffersProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <CitiesCard offer={offer} key={offer.id} cardType={cardType} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      ))}
    </>
  );
}

export default Offers;

