import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import EMailIcon from '@material-ui/icons/EMail';
import { faTwitter, faFacebookF, faGithub, faGitlab, faMedium, faLinkedin, faInstagram, faTumblr, faGetPocket, faYoutube, faVimeo } from '@fortawesome/free-brands-svg-icons';
import FabIcon from '../components/FabIcon';
import { SocialsQuery } from '../../graphql-types';

interface IconBoxProps {
  children: JSX.Element | JSX.Element[];
  href: string;
  title?: string;
}

function IconBox({ children, href, title }: IconBoxProps) {
  return (
    <Box component="span" px={1}>
      <Link href={href} target="_blank" rel="noopener noreferrer" title={title || undefined}>
        {children}
      </Link>
    </Box>
  );
}

function Socials() {
  const data = useStaticQuery<SocialsQuery>(graphql`
    query Socials {
      site {
        siteMetadata {
          social {
            mail
            github
            twitter
            facebook
            gitlab
            medium
            linkedin
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
  const { mail, github, twitter, facebook, gitlab, medium, linkedin, pocket, tumblr, instagram, youtube, vimeo } = data.site.siteMetadata.social;

  return (
    <Box pt={4}>
      <address>
        {mail !== '' ? (
          <IconBox href={`mailto:${mail}`} title="E-Mail">
            <EMailIcon color="action" />
          </IconBox>
        ) : null}
        {github !== '' ? (
          <IconBox href={`https://github.com/${github}`} title="GitHub">
            <FabIcon icon={faGithub} color="action" />
          </IconBox>
        ) : null}
        {gitlab !== '' ? (
          <IconBox href={`https://gitlab.com/${gitlab}`} title="GitLab">
            <FabIcon icon={faGitlab} color="action" />
          </IconBox>
        ) : null}
        {twitter !== '' ? (
          <IconBox href={`https://twitter.com/${twitter}`} title="Twitter">
            <FabIcon icon={faTwitter} color="action" />
          </IconBox>
        ) : null}
        {facebook !== '' ? (
          <IconBox href={`https://www.facebook.com/${facebook}`} title="Facebook">
            <FabIcon icon={faFacebookF} color="action" />
          </IconBox>
        ) : null}
        {instagram !== '' ? (
          <IconBox href={`https://instagram.com/${instagram}`} title="instagram">
            <FabIcon icon={faInstagram} color="action" />
          </IconBox>
        ) : null}
        {tumblr !== '' ? (
          <IconBox href={`https://${tumblr}.tumblr.com`} title="tumblr">
            <FabIcon icon={faTumblr} color="action" />
          </IconBox>
        ) : null}
        {medium !== '' ? (
          <IconBox href={`https://medium.com/@${medium}`} title="Medium">
            <FabIcon icon={faMedium} color="action" />
          </IconBox>
        ) : null}
        {pocket !== '' ? (
          <IconBox href={`https://getpocket.com/@${pocket}`} title="Pocket">
            <FabIcon icon={faGetPocket} color="action" />
          </IconBox>
        ) : null}
        {linkedin !== '' ? (
          <IconBox href={`https://linkedin.com/in/${linkedin}`} title="LinkedIn">
            <FabIcon icon={faLinkedin} color="action" />
          </IconBox>
        ) : null}
        {youtube !== '' ? (
          <IconBox href={`https://youtube.com/${youtube}`} title="YouTube">
            <FabIcon icon={faYoutube} color="action" />
          </IconBox>
        ) : null}
        {vimeo !== '' ? (
          <IconBox href={`https://vimeo.com/${vimeo}`} title="vimeo">
            <FabIcon icon={faVimeo} color="action" />
          </IconBox>
        ) : null}
      </address>
    </Box>
  );
}

export default Socials;
