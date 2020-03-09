import * as React from 'react';
import { useSiteMetadata } from '../graphql-hooks';
import { useLocation } from '@reach/router';

type ShareType = 'twitter' | 'line' | 'facebook';

export default function useSocialShare(type: ShareType, title?: string) {
  const url = useLocation().href;
  const siteTitle = useSiteMetadata().title;
  const shareTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  return React.useMemo(
    () =>
      type === 'twitter'
        ? `https://twitter.com/intent/tweet?text=${encodeURI(shareTitle)}&url=${encodeURIComponent(url)}`
        : type === 'line'
        ? `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`
        : `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    [url, shareTitle, type]
  );
}
