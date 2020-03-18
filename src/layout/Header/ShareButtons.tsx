import * as React from 'react';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useSiteMetadata } from '../../graphql-hooks';
import useSocialShare from '../../utils/useSocialShare';
import useUpdateOnClient from '../../utils/useUpdateOnClient';

type Props = {
  title?: string;
} & Partial<Pick<IconButtonProps, 'color'>>;

function ShareButtons({ title, color = 'default' }: Props) {
  const isClient = useUpdateOnClient();
  const { lang, social } = useSiteMetadata();
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  return (
    <div>
      <Tooltip title={lang === 'ja' ? 'Twitterでシェア' : 'Share On Twitter'}>
        <IconButton key={isClient} color={color} href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={lang === 'ja' ? 'Facebookで共有' : 'Share on Facebook'}>
        <IconButton key={isClient} color={color} href={fbUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <FacebookIcon />
        </IconButton>
      </Tooltip>
      {social.github ? (
        <Tooltip title="GitHub">
          <IconButton
            color={color}
            href={`https://github.com/${social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </div>
  );
}

export default ShareButtons;
