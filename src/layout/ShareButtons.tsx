import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useLocation } from '@reach/router';
import FabIcon from '../components/FabIcon';
import { faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { shareOnTwitter, shareOnFacebook } from '../utils/sharer';
import { IconProps } from '@material-ui/core/Icon';

interface Props {
  className?: string;
  fontSize?: IconProps['fontSize'];
  color?: IconButtonProps['color'];
  title?: string;
}

function ShareButtons({ className, title, fontSize, color }: Props) {
  const location = useLocation();
  const data = useStaticQuery(graphql`
    query ShareButton {
      site {
        siteMetadata {
          social {
            github
          }
        }
      }
    }
  `);
  const { github } = data.site.siteMetadata.social;
  return (
    <div className={classNames(className)}>
      <Tooltip title="Share on Twitter">
        <IconButton
          color={color || 'default'}
          href={shareOnTwitter({ url: location.href, title: title || document.title })}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FabIcon icon={faTwitter} fontSize={fontSize || 'default'} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on Facebook">
        <IconButton color={color || 'default'} href={shareOnFacebook({ url: location.href })} target="_blank" rel="noopener noreferrer">
          <FabIcon icon={faFacebookF} fontSize={fontSize || 'default'} />
        </IconButton>
      </Tooltip>
      {github ? (
        <Tooltip title="GitHub">
          <IconButton color={color || 'default'} href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
            <FabIcon icon={faGithub} fontSize={fontSize || 'default'} />
          </IconButton>
        </Tooltip>
      ) : null}
    </div>
  );
}

export default ShareButtons;
