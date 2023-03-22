import cn from 'classnames';
import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { City, Offer } from '../../types/offers';
import useMap from '../../hooks/useMap/useMap';
import 'leaflet/dist/leaflet.css';


const URL_DEFAULT_ICON = 'img/pin.svg';
const mapStyle = {
  'cities__map': {
    height: '100%',
    width: '100%'
  },
  'property__map': {
    height: '579px',
    width: '1144px',
    marginRight: 'auto',
    marginLeft: 'auto'
  }
};

type MapProps = {
  className: 'cities__map' | 'property__map';
  city: City;
  offers: Offer[];
}
const defaultIcon = new Icon({
  iconUrl: URL_DEFAULT_ICON,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});


function Map({ city, offers, className }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const style = mapStyle[className];

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(defaultIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers]);


  return (
    <section style={style} ref={mapRef} className={cn('map', className)} ></section >
  );
}

export default Map;
