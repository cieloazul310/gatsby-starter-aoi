import * as React from 'react';
import Container, { ContainerProps } from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

type Props = {
  value: number;
  index: number;
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  visible?: boolean;
} & ContainerProps;

function TabPane({ index, value, children, maxWidth = 'md', ...props }: Props) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`}>
      <Container maxWidth={maxWidth} {...props}>
        <Box py={2} minHeight="80vh">
          {value === index ? children : null}
        </Box>
      </Container>
    </div>
  );
}

export default TabPane;
