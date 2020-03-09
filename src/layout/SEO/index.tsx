import * as React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../../graphql-hooks';

interface Props {
  title?: string;
  description?: string;
  keywords?: string[];
}

function SEO({ title, description, keywords }: Props) {
  const siteMetadata = useSiteMetadata();
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
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:title',
          content: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
        },
        {
          name: 'twitter:description',
          content: description || siteMetadata.description,
        },
      ]}
    />
  );
}

export default SEO;
