import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import EMailIcon from '@material-ui/icons/EMail';
import GithubIcon from '@material-ui/icons/Github';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/Youtube';
import { useSiteMetadata } from '../../graphql-hooks';

function DrawerFooter() {
  const { title, description, author, social } = useSiteMetadata();
  return (
    <Box p={2}>
      <Box pb={3}>
        <Typography variant="subtitle2" gutterBottom color="textSecondary">
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" paragraph>
        {description}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Author: {author}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {social.mail ? (
          <Box mr={1} component="span">
            <MuiLink href={`mailto:${social.mail}`} target="_blank" rel="noopener noreferrer" color="inherit" title="Email">
              <EMailIcon />
            </MuiLink>
          </Box>
        ) : null}
        {social.github ? (
          <Box mr={1} component="span">
            <MuiLink href={`https://github.com/${social.github}`} target="_blank" rel="noopener noreferrer" color="inherit" title="GitHub">
              <GithubIcon />
            </MuiLink>
          </Box>
        ) : null}
        {social.twitter ? (
          <Box mr={1} component="span">
            <MuiLink
              href={`https://twitter.com/${social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              title="Twitter"
            >
              <TwitterIcon />
            </MuiLink>
          </Box>
        ) : null}
        {social.facebook ? (
          <Box mr={1} component="span">
            <MuiLink
              href={`https://www.facebook.com/${social.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              title="Facebook"
            >
              <FacebookIcon />
            </MuiLink>
          </Box>
        ) : null}
        {social.instagram ? (
          <Box mr={1} component="span">
            <MuiLink
              href={`https://instagram.com/${social.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              title="Instagram"
            >
              <InstagramIcon />
            </MuiLink>
          </Box>
        ) : null}
        {social.youtube ? (
          <Box mr={1} component="span">
            <MuiLink
              href={`https://youtube.com/user/${social.youtube}`}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              title="Youtube"
            >
              <YoutubeIcon />
            </MuiLink>
          </Box>
        ) : null}
      </Typography>
    </Box>
  );
}
export default DrawerFooter;
