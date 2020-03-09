import * as React from 'react';
import Box from '@material-ui/core/Box';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/Github';
import { useSiteMetadata } from '../../graphql-hooks';
import useSocialShare from '../../utils/useSocialShare';

type Props = {
  className?: string;
  title?: string;
} & Partial<Pick<IconButtonProps, 'color'>>;

function ShareButtons({ className, title, color = 'default' }: Props) {
  const { github } = useSiteMetadata().social;
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  return (
    <Box className={className}>
      <Tooltip title="Share on Twitter">
        <IconButton color={color} href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on Facebook">
        <IconButton color={color} href={fbUrl} target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </IconButton>
      </Tooltip>
      {github ? (
        <Tooltip title="GitHub">
          <IconButton color={color} href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </Box>
  );
}

export default ShareButtons;
