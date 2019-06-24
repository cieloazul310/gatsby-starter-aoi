import * as React from 'react';
import classNames from 'classnames';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FabIcon from '../components/FabIcon';
import { LocationWithState } from '../types';
import { shareOnTwitter, shareOnFacebook } from '../utils/sharer';
import { IconProps } from '@material-ui/core/Icon';

interface Props {
  className?: string;
  fontSize?: IconProps['fontSize'];
  color?: IconButtonProps['color'];
  title: string;
  location: LocationWithState;
}

function ShareButtons({ className, title, location, fontSize, color }: Props) {
  return (
    <div className={classNames(className)}>
      <Tooltip title="Share on Twitter">
        <IconButton
          color={color || 'default'}
          href={shareOnTwitter({ url: location.href, title: title })}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FabIcon icon="twitter" fontSize={fontSize || 'default'} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on Facebook">
        <IconButton color={color || 'default'} href={shareOnFacebook({ url: location.href })} target="_blank" rel="noopener noreferrer">
          <FabIcon icon="facebook-f" fontSize={fontSize || 'default'} />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub">
        <IconButton color={color || 'default'} href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FabIcon icon="github" fontSize={fontSize || 'default'} />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default ShareButtons;
