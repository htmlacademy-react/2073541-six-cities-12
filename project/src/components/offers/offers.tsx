
import { Offer } from '../../types/offers';
import CitiesCard from '../card/card';


type OffersProps = {
  offers: Offer[];
  cardType: 'cities' | 'favorites' | 'near-places';
}

function Offers({ offers, cardType }: OffersProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <CitiesCard offer={offer} key={offer.id} cardType={cardType} />
      ))}
    </>
  );
}

export default Offers;

