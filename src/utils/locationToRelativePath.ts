import { withPrefix } from 'gatsby';
import { WindowLocation } from '@reach/router';
import { LocationWithState } from '../types';

export default function locationToRelativePath(location: LocationWithState | WindowLocation): String {
  const prefix = withPrefix('');
  const { pathname } = location;
  if (process.env.NODE_ENV === 'development') {
    return pathname.slice(1);
  } else {
    return pathname.replace(prefix, '');
  }
}
