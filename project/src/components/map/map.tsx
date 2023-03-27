import cn from 'classnames';
import { useRef, useEffect } from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import { Offer } from '../../types/offers';
import useMap from '../../hooks/useMap/useMap';
import 'leaflet/dist/leaflet.css';


const URL_DEFAULT_ICON = 'img/pin.svg';
const URL_CURRENT_ICON = 'img/pin-active.svg';
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
const defaultIcon = new Icon({
  iconUrl: URL_DEFAULT_ICON,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});
const currentIcon = new Icon({
  iconUrl: URL_CURRENT_ICON,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

type MapProps = {
  className: 'cities__map' | 'property__map';
  offers: Offer[];
  currentOfferId: number | null;
}


function Map({ offers, currentOfferId, className }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);
  const style = mapStyle[className];

  useEffect(() => {
    const markerGroup = new LayerGroup();

    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            currentOfferId && offer.id === currentOfferId
              ? currentIcon
              : defaultIcon
          )
          .addTo(markerGroup);
      });
      markerGroup.addTo(map);
    }

    return () => {
      map?.removeLayer(markerGroup);
    };
  }, [map, offers, currentOfferId]);


  return (
    <section style={style} ref={mapRef} className={cn('map', className)} ></section >
  );
}

export default Map;
