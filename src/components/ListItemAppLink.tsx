import * as React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';

type GatsbyLinkComposedProps<T = {}> = Omit<GatsbyLinkProps<T>, 'ref'>;

const GatsbyLinkComposed = React.forwardRef<any, GatsbyLinkComposedProps>((props, ref) => {
  const { to, state, ...other } = props;
  return <GatsbyLink to={to} state={state} ref={ref} {...other} />;
});

interface ListItemAppLinkPropsBase {
  innerRef?: React.Ref<any>;
  naked?: boolean;
}

export type ListItemAppLinkProps = ListItemAppLinkPropsBase & GatsbyLinkComposedProps & Omit<ListItemProps<'a'>, 'ref'>;

export function ListItemAppLink(props: ListItemAppLinkProps) {
  const { className, innerRef, naked, to, ...other } = props;

  if (naked) {
    return <GatsbyLinkComposed className={className} ref={innerRef} to={to} {...other} />;
  }

  return <ListItem component={GatsbyLinkComposed} className={className} to={to} ref={innerRef} {...other} />;
}

export default ListItemAppLink;
