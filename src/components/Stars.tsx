import Star from './Star';
import { StarsProps } from '../interfaces/StarsProps';
  
export default function Stars({ count }: StarsProps): JSX.Element | null {
  if (count < 1 || count > 5 || typeof count !== 'number') {
    return null;
  }
  const arr: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(
      <li key={i}>
        <Star />
      </li>
    );
  }
  return <ul className="card-body-stars u-clearfix">{arr}</ul>;
}
  