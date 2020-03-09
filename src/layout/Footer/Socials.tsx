import * as React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import EMailIcon from '@material-ui/icons/EMail';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/Github';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/Youtube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { faGitlab, faMedium, faTumblr, faGetPocket, faVimeo } from '@fortawesome/free-brands-svg-icons';
import FabIcon from '../../components/FabIcon';
import { useSiteMetadata } from '../../graphql-hooks';

interface IconBoxProps {
  children: JSX.Element | JSX.Element[];
  href: string;
  title?: string;
}

function IconBox({ children, href, title }: IconBoxProps) {
  return (
    <Link color="textSecondary" href={href} target="_blank" rel="noopener noreferrer" title={title || undefined}>
      <Box display="flex" flex="1" width={36} height={36} alignItems="center" justifyContent="center">
        {children}
      </Box>
    </Link>
  );
}

function Socials() {
  const { mail, github, twitter, facebook, gitlab, medium, linkedin, pocket, tumblr, instagram, youtube, vimeo } = useSiteMetadata().social;
  const fontSize = 'default';

  return (
    <Box py={1} textAlign="center" component="address" display="flex" justifyContent="center" flexWrap="wrap">
      {mail !== '' ? (
        <IconBox href={`mailto:${mail}`} title="E-Mail">
          <EMailIcon fontSize={fontSize} />
        </IconBox>
      ) : null}
      {github !== '' ? (
        <IconBox href={`https://github.com/${github}`} title="GitHub">
          <GithubIcon fontSize={fontSize} />
        </IconBox>
      ) : null}
      {gitlab !== '' ? (
        <IconBox href={`https://gitlab.com/${gitlab}`} title="GitLab">
          <FabIcon icon={faGitlab} fontSize={fontSize} />
        </IconBox>
      ) : null}
      {twitter !== '' ? (
        <IconBox href={`https://twitter.com/${twitter}`} title="Twitter">
          <TwitterIcon fontSize={fontSize} />
        </IconBox>
      ) : null}
      {facebook !== '' ? (
        <IconBox href={`https://www.facebook.com/${facebook}`} title="Facebook">
          <FacebookIcon fontSize={fontSize} />
        </IconBox>
      ) : null}
      {instagram !== '' ? (
        <IconBox href={`https://instagram.com/${instagram}`} title="instagram">
          <InstagramIcon fontSize={fontSize} />
        </IconBox>
      ) : null}
      {youtube !== '' ? (
        <IconBox href={`https://youtube.com/${youtube}`} title="YouTube">
          <YoutubeIcon fontSize={fontSize} />
        </IconBox>
      ) : null}
      {tumblr !== '' ? (
        <IconBox href={`https://${tumblr}.tumblr.com`} title="tumblr">
          <FabIcon icon={faTumblr} fontSize={fontSize} />
        </IconBox>
      ) : null}
      {medium !== '' ? (
        <IconBox href={`https://medium.com/@${medium}`} title="Medium">
          <FabIcon icon={faMedium} fontSize={fontSize} />
        </IconBox>
      ) : null}
      {pocket !== '' ? (
        <IconBox href={`https://getpocket.com/@${pocket}`} title="Pocket">
          <FabIcon icon={faGetPocket} fontSize={fontSize} />
        </IconBox>
      ) : null}
      {linkedin !== '' ? (
        <IconBox href={`https://linkedin.com/in/${linkedin}`} title="LinkedIn">
          <LinkedInIcon fontSize={fontSize} />
        </IconBox>
      ) : null}
      {vimeo !== '' ? (
        <IconBox href={`https://vimeo.com/${vimeo}`} title="vimeo">
          <FabIcon icon={faVimeo} fontSize={fontSize} />
        </IconBox>
      ) : null}
    </Box>
  );
}

export default Socials;
