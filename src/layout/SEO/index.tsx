import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../../graphql-hooks';

interface Props {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

function SEO({ title, description, keywords, image }: Props) {
  const siteMetadata = useSiteMetadata();
  const images = image
    ? [
        {
          name: 'og:image',
          content: `${siteMetadata.siteUrl}${image}`,
        },
      ]
    : [];
  return (
    <Helmet
      htmlAttributes={{ lang: siteMetadata.lang || 'en' }}
      title={title || siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: description || siteMetadata.description,
        },
        { name: 'keywords', content: keywords ? [...keywords, ...siteMetadata.keywords].join(', ') : siteMetadata.keywords.join(', ') },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:title',
          content: title || siteMetadata.title,
        },
        {
          name: 'og:description',
          content: description || siteMetadata.description,
        },
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: siteMetadata.title,
        },
        {
          name: 'twitter:title',
          content: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
        },
        {
          name: 'twitter:description',
          content: description || siteMetadata.description,
        },
        ...images,
      ]}
    />
  );
}

export default SEO;
