import * as React from 'react';
import Icon, { IconProps } from '@material-ui/core/Icon';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props extends IconProps {
  icon: IconName;
  defaultVertical?: boolean;
}
interface State {
  readonly fetched: boolean;
  readonly dy: string | number;
}

class FabIcon extends React.Component<Props, State> {
  readonly state = {
    fetched: false,
    dy: 0,
  };
  componentWillMount() {
    const icon = iconNameToPascal(this.props.icon);
    import(`@fortawesome/free-brands-svg-icons/fa${icon}`).then(faIcon => {
      library.add(faIcon.definition);
      const width = faIcon.definition.icon[0];
      this.setState({
        fetched: true,
        dy: width > 512 ? (512 - width) / 2 : 0,
      });
    });
  }
  public render() {
    const { icon, defaultVertical, ...options } = this.props;
    const { fetched, dy } = this.state;
    return fetched ? (
      <Icon {...options}>
        <FontAwesomeIcon
          style={{
            verticalAlign: !defaultVertical ? '0.125em' : undefined,
            transform:
              dy !== null
                ? `translateX(${dy / sizeToFontSize(options.fontSize)}px)`
                : undefined,
          }}
          icon={['fab', icon]}
        />
      </Icon>
    ) : null;
  }
}

export default FabIcon;

// helpers
function iconNameToPascal(iconName: IconName): string {
  const camel = iconName.replace(/-./g, s => s.charAt(1).toUpperCase());
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}
function sizeToFontSize(
  fontSize: 'inherit' | 'default' | 'small' | 'large' | undefined
): number {
  return fontSize === 'small' ? 20 : fontSize === 'large' ? 36 : 24;
}
