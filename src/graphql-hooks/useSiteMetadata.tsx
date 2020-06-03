import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetadataQuery } from '../../graphql-types';

export function useSiteMetadata() {
  const { site } = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          lang
          social {
            mail
            twitter
            github
            facebook
            gitlab
            linkedin
            medium
            pocket
            tumblr
            instagram
            vimeo
            youtube
          }
        }
      }
    }
  `);
  return site && site.siteMetadata ? site.siteMetadata : null;
}
