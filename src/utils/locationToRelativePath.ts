import { withPrefix } from 'gatsby';
import { LocationWithState } from '../types';

export default function locationToRelativePath(location: LocationWithState): String {
  const prefix = withPrefix('');
  const { pathname } = location;
  if (process.env.NODE_ENV === 'development') {
    return pathname.slice(1);
  } else {
    return pathname.replace(prefix, '');
  }
}
