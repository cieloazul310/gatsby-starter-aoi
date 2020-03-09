import * as React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps, navigate, withPrefix } from 'gatsby';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { useLocation, NavigateOptions } from '@reach/router';
import clsx from 'clsx';

type GatsbyLinkComposedProps<T = {}> = Omit<GatsbyLinkProps<T>, 'ref'>;

const GatsbyLinkComposed = React.forwardRef<any, GatsbyLinkComposedProps>((props, ref) => {
  const { to, state, ...other } = props;
  return <GatsbyLink to={to} state={state} ref={ref} {...other} />;
});
interface LinkPropsBase {
  activeClassName?: string;
  innerRef?: React.Ref<HTMLAnchorElement>;
  naked?: boolean;
}

export type AppLinkProps = LinkPropsBase & GatsbyLinkComposedProps & Omit<MuiLinkProps, 'href'>;

export function AppLink(props: AppLinkProps) {
  const {
    activeClassName = 'active',
    className: classNameProps,
    color = 'secondary',
    underline = 'hover',
    innerRef,
    naked,
    to,
    ...other
  } = props;
  const { pathname } = useLocation();

  const className = clsx(classNameProps, {
    [activeClassName]: pathname === withPrefix(to) && activeClassName
  });

  if (naked) {
    return <GatsbyLinkComposed className={className} ref={innerRef} to={to} {...other} />;
  }

  return (
    <MuiLink component={GatsbyLinkComposed} className={className} to={to} ref={innerRef} color={color} underline={underline} {...other} />
  );
}
export default AppLink;

export function appNavigate<T>(to: string, options: NavigateOptions<T> = {}) {
  navigate(to, options);
}
