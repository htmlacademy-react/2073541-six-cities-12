
import cn from 'classnames';
type MapProps = {
  className: string;
}

const Map = ({ className }: MapProps): JSX.Element => (
  <section className={cn('map', className)} ></section >
);

export default Map;
