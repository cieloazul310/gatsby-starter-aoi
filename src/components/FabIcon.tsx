import * as React from 'react';
import Icon, { IconProps } from '@material-ui/core/Icon';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props extends IconProps {
  icon: IconDefinition;
  defaultVertical?: boolean;
}

function FabIcon({ icon, defaultVertical, ...options }: Props) {
  const [width] = icon.icon;
  const dy = width > 512 ? (512 - width) / 2 : 0;
  return (
    <Icon {...options}>
      <FontAwesomeIcon
        icon={icon}
        style={{
          verticalAlign: !defaultVertical ? '0.125em' : undefined,
          transform: dy !== null ? `translateX(${dy / sizeToFontSize(options.fontSize)}px)` : undefined
        }}
      />
    </Icon>
  );
}

export default FabIcon;

// helpers
function sizeToFontSize(fontSize: 'inherit' | 'default' | 'small' | 'large' | undefined): number {
  return fontSize === 'small' ? 20 : fontSize === 'large' ? 36 : 24;
}
