interface ShareOnTwitterProps {
  url: string;
  title?: string;
}

export const shareOnTwitter = ({ url, title }: ShareOnTwitterProps): string =>
  title
    ? `https://twitter.com/intent/tweet?text=${encodeURI(title)}&url=${encodeURIComponent(url)}`
    : `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;

interface ShareOnFacebookProps {
  url: string;
}

export const shareOnFacebook = ({ url }: ShareOnFacebookProps): string =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
