import { LocationWithState } from '../types';

export default function locationToRelativePath(location: LocationWithState, pathPrefix: string): String {
  const { hostname, pathname } = location;
  if (hostname === 'localhost') {
    return pathname;
  } else {
    return pathname.replace(pathPrefix, '');
  }
}
