import * as React from 'react';
import Icon, { IconProps } from '@material-ui/core/Icon';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/';

interface Props extends IconProps {
  defaultVertical?: boolean;
}

function GithubIcon({ defaultVertical, ...options }: Props) {
  return (
    <Icon {...options}>
      <FontAwesomeIcon icon={faGithub} />
    </Icon>
  );
}

export default GithubIcon;

// helpers
function iconNameToPascal(iconName: IconName): string {
  const camel = iconName.replace(/-./g, s => s.charAt(1).toUpperCase());
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}
function sizeToFontSize(fontSize: 'inherit' | 'default' | 'small' | 'large' | undefined): number {
  return fontSize === 'small' ? 20 : fontSize === 'large' ? 36 : 24;
}
